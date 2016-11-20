/*global Ember */
window.ENV = window.ENV || {
};
window.ENV['simple-auth'] = {
    session: 'session:custom',
    authenticationRoute: 'login',
    authenticator: 'authenticator:custom',
    authorizer: 'authorizer:custom',
    routeAfterAuthentication: 'myinfo',
    store: 'simple-auth-session-store:cookie',
    cookieName: 'imac_auth_session'
};

window.ENV['simple-auth-cookie-store'] = {
    cookieName: _cookieName
}
window.App = Ember.Application.create({
    rootElement: '#IMACwebapp-app',
    LOG_TRANSITIONS: true
});

App.UrlApi = _urlApi;
App.emailRegex = new RegExp(/^_urlApi([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)

App.SignalR = $.hubConnection(App.UrlApi);
App.SignalR.logging = false;

App.UrlUpload = null;
App.UrlDownload = null;
App.LogoFile = null;

Ember.Application.initializer({
    name: "globals",
    initialize: function (container, application) {
        container.register('globals:settings', Ember.Object.extend(_settings), { singleton: true });
        application.inject('controller', 'settings', 'globals:settings');
    }
}, {
    name: "authentication",
    before: 'simple-auth',
    initialize: function (container, application) {
        container.register('authenticator:custom', App.CustomAuthenticator);
        container.register('authorizer:custom', App.CustomAuthorizer);
    }
});