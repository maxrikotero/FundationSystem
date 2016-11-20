Ember.Handlebars.registerHelper('i18n', function (property, options) {
    var params = options.hash,
        self = this;
    if (params){
        // Support variable interpolation for our string
        Object.keys(params).forEach(function (key) {
            params[key] = Em.Handlebars.get(self, params[key], options);
        });
    }

    return I18n.t(property, params);
});