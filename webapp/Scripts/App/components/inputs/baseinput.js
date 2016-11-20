App.FormInputComponent = App.BaseValidateComponent.extend({
    templateName: 'components/inputs/baseinput',
    cClass: function () {
        return 'form-control' + (!this.get('isValidated') ? ' validation-input-error' : '');
    }.property('isValidated'),
    baseId: 'input_',
    inputId: function () {
        return this.get('cfg.id') ? this.get('cfg.id') : (this.get('baseId') + Ember.guidFor(this));
    }.property('cfg'),
    placeholder: function () {
        return this.get('cfg.placeholder') ? this.get('cfg.placeholder') : null;
    }.property('cfg'),
    labelSm2: function () {
        return this.get('cfg.labelSm2') ? this.get('cfg.labelSm2') : null;
    }.property('cfg'),
    inputCellClass: function () {
        return this.get('cfg.text') ? (this.get('cfg.labelSm2') ? 'col-sm-10' : 'col-sm-8') : 'col-sm-12';
    }.property('cfg'),
    initialize: function () {
        this._element = $('#' + this.get('inputId'));
        if ($.isFunction(this.afterDidInsertElement)) {
            this.afterDidInsertElement();
        }
    },
    cdisabled: false,
    ctype: function () {
        return this.get('cfg.type') ? this.get('cfg.type') : 'text'
    }.property('cfg'),
    
    
});