App.LoginRoute = Ember.Route.extend({
    renderTemplate: function () {
        this.render('login/index', { outlet: 'login' });
    },
    setupController: function (controller, model) {
        controller.onLoad();
    }
});