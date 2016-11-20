App.UnauthorizedRoute = App.BaseAuthRoute.extend({
    viewTemplate: 'bcommon/unauthorized',
    viewOutlet: 'main',
    model: function () {
        return null;
    }
});