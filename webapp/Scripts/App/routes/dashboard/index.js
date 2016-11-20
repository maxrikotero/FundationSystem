App.DashboardRoute = App.BaseRoute.extend({
    viewTemplate: 'dashboard/index',
    viewOutlet: 'main',
    modelError: false,
    model: function () {
        var self = this;
        return this.goApi({}, 'getmodel', 'GET', 'dashboard').then(function (response) {

        });
    },
});