App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo('dashboard');
    }
});

App.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin, {
    setupController: function (controller, model) {
        controller.set('model', model);
        controller.onLoad();
    },
    beforeModel: function (transition) {
        moment.tz.setDefault('America/Argentina/Salta');
        this._super(transition);
    },
    model: function () {
        I18n.locale = 'es';
        moment.locale('es');
        return App.imacmodel.create({ searchTerm: '' });
    },
    afterModel: function () {
        var self = this;
        if (self.get('session.isAuthenticated')) {
            if (new Date(self.get('session.expirationTime')) < new Date($.now())) {
                self.get('session').invalidate();
            }
        }
        setInterval(function () {
            if (self.get('session.isAuthenticated')) {
                if (new Date(self.get('session.expirationTime')) < new Date($.now())) {
                    self.renderModal('sessionexpirationmodal', {
                        modalsize: 's',
                        title: I18n.t('sessionexpirationModalView.title')
                    });
                }
            }
        }, 60000);
    },
    sessionAuthenticationSucceeded: function () {
        var controller = this.controllerFor('application');
        var attemptedTransition = this.get('session.attemptedTransition');
        if (attemptedTransition) {
            attemptedTransition.retry();
            this.get('session.attemptedTransition', null);
        } else {
            this.replaceWith('myinfo');
        }
    }
});