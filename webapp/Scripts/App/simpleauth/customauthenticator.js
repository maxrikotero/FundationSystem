App.CustomAuthenticator = SimpleAuth.Authenticators.Base.extend({
    tokenEndpoint: App.UrlApi + '/token',
    restore: function (data) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },

    authenticate: function (credentials) {

        var _this = this;
        return new Ember.RSVP.Promise(function (resolve, reject) {
            Ember.$.ajax({
                url: _this.tokenEndpoint,
                type: 'POST',
                cache: false,
                data: { grant_type: 'password', username: credentials.identification, password: credentials.password }
            }).then(function (response) {
                var date = (new Date($.now()));
                date.setMinutes(date.getMinutes() + 30);
                Ember.run(function () {
                    resolve({
                        token: response.access_token,
                        account_id: response.account_id,
                        username:response.username,
                        roles: response.roles,
                        isServerAdmin: response.roles.toLowerCase().indexOf('serveradmin') >= 0,
                        name: response.name,
                        picture: response.picture ? response.picture : '/Scripts/Images/User.svg'
                    });
                });
            }, function (xhr) {
                var error = xhr && xhr.responseText ? JSON.parse(xhr.responseText).error_description : null;
                Ember.run(function () {
                    reject(error ? error : "Error while validating user");
                });
            });
        });
    },

    invalidate: function () {
        var _this = this;
        return new Ember.RSVP.Promise(function (resolve) {
            // TODO - hacer llamada a api para desconectar SignalR
            resolve();
        });
    }
});