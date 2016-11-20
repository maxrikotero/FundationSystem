App.LoginIndexView = Ember.View.extend({
    init: function () {
        this._super();
    },
    didInsertElement: function () {
        this._super();
        if (this.get('controller.session.isAuthenticated')) {
            this.get('controller').transitionTo('myinfo');
        } else {
            Ember.run.scheduleOnce('afterRender', this, this.setIdentification);
        }
    },
    setIdentification: function () {
        if (localStorage.getItem('IMAC_User')) {
            this.get('controller').set('identification', localStorage.getItem('IMAC_User'));
            $('#chkRemember').prop('checked', true);
            setTimeout(function () {
                $('#lo_password').focus();
            }, 500);
        }
    }
});

