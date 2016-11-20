/// <reference path="../../bcommon/references.js" />

App.TimeLineComponent = Ember.Component.extend({
    templateName: 'components/timeline',
    showImg: true,
    hasUser: true,
    actions: {
        collapse: function (fecha) {
            $('.' + fecha.liClass).each(function (inex, item) {
                if ($(item).hasClass('in')) {
                    $(item).collapse('hide');
                }
                else {
                    $(item).collapse('show');
                }
            });
        }
    }
});