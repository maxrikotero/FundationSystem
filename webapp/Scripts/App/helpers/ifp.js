Ember.Handlebars.helper('ifp', function (a, property, b, options) {
    var show = false;
    switch (property) {
        case 'equals': {
            return a == b ? options.fn(this): options.inverse(this);
        }
        case 'greaterthan': {
            return ($.isArray(a) && a.length > b) ? options.fn(this) : options.inverse(this);
        }
    }
});