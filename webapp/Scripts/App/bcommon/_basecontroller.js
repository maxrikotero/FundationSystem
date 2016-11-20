/// <reference path="/Scripts/App/bcommon/references.js" />
App.BaseController = Ember.Controller.extend({
    needs: ['application'],
    onLoad: function () {

    },
    validar: function (cfg) {
        var validated = true;
        var focused = false;
        $.each(cfg, function (property, value) {
            if (Ember.get(value, 'validate')) {
                Ember.get(value, 'validate.component').updateError();
                if (!Ember.get(value, 'validate.component.isValidated')) {
                    validated = false;

                    if (!focused) {
                        Ember.get(value, 'validate.component').focus();
                        focused = true;
                    }
                }
            }
        });
        return validated;
    },
    goApi: function (data, action, type, controller) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            $.ajax({
                url: App.UrlApi + '/imac/' + controller + '/' + action,
                type: type,
                data: data,
                dataType: 'json',
                cache: false,
                success: function (data) {
                    resolve(data);
                },
                error: function (error) {
                    reject(error)
                }
            });
        });
    },
});

var gridButton = function (btnClass, text, sendAction, sendParam, tooltip, disabled) {
    return '<button type="button" class="btn btn-xs ' + btnClass + '"' +
        (tooltip && disabled != true ? (' data-toggle="tooltip" data-placement="' + tooltip.placement + '" title="' + tooltip.text + '"') : '') +
        (sendAction && disabled != true ?
            (' onclick="getView($(this)).get(\'targetObject\').send(\'' + sendAction + '\'' +
                (sendParam ?
                    (',' + sendParam)
                    : '') +
                ')"')
            : '') +
        (disabled ? ' disabled="disabled"' : '') +
        '>' + text + '</button>';
}