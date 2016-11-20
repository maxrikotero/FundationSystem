/// <reference path="/Scripts/vendor/plugins/moment.js" />
App.FormDateComponent = App.FormInputComponent.extend({
    baseId: 'date_',
    layoutName: 'components/inputs/date',
    dateElement: null,
    inModal: function () {
        return this.get('cfg.inModal') ? this.get('cfg.inModal') : false;
    }.property('cfg'),
    ctype: 'text',
    dateObserver: function () {
        this.set('cvalue', moment(this.get('showvalue'), 'DD-MM-YYYY').isValid() ? moment(this.get('showvalue'), 'DD-MM-YYYY').format() : null);
    }.observes('showvalue'),
    initialize: function () {
        var self = this;
        if (this.get('cvalue')) {
            $('#' + this.get('inputId')).val(moment(this.get('cvalue')).format('DD-MM-YYYY'));
        }
        this.dateElement = $('#' + this.get('inputId')).datepicker({
            format: 'dd-mm-yyyy',
            todayBtn: "linked",
            autoclose: true,
            language: 'es',
            zIndexOffset: 1150
        });
        this.dateElement.on('changeDate', function (ev) {
            self.set('cvalue', moment(ev.date).format());
            self.set('showvalue', moment(ev.date).format('DD-MM-YYYY'));
            $(this).datepicker('hide');
        });
        if (this.get('inModal')) {
            this.dateElement.on('show', function () {
                $('.datepicker').css('z-index', '1151');
            });
        }
    }
});