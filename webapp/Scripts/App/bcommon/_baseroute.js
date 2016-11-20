/// <reference path="/Scripts/App/bcommon/references.js" />
App.BaseRoute = Ember.Route.extend({
    viewTemplate: null,
    viewOutlet: null,
    renderTemplate: function () {
        if (this.get('viewTemplate') && this.get('viewOutlet')) {
            this.render(this.get('viewTemplate'), { outlet: this.get('viewOutlet') });
        }
    },
    beforeSetupController: function (controller, model) {

    },
    setupController: function (controller, model) {
        this.beforeSetupController(controller, model);
        controller.set('model', model);
        controller.onLoad();
    },
    model: function () {
        return App.imacmodel.create();
    },
    goApi: function (data, action, type, controller) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            $.ajax({
                url: 'http://localhost:55221' + '/fundation/' + controller + '/' + action,
                type: type,
                data: data,
                dataType: 'json',
                cache: false,
                success: function (data) {
                    resolve(data);
                },
                error: function (error) {
                    reject(error);
                }
            });
        });
    },
    renderModal: function (modalView, options, modalmodal) {
        options = options || {
        };
        if (modalmodal == true) {
            Ember.set(options, 'submodal', true);
        }
        var controller = this.controllerFor(modalView);
        controller.set('model', options.model);
        controller.setProperties(options);
        controller.onLoad();
        this.render(modalView, {
            into: 'application',
            outlet: modalmodal ? 'modalmodal' : 'modal',
            controller: controller
        });
    },
    actions: {
        renderModal: function (modalView, options, modalmodal) {
            this.renderModal(modalView, options, modalmodal);
        }
    }
});

App.BaseAuthRoute = App.BaseRoute.extend(SimpleAuth.AuthenticatedRouteMixin, {});