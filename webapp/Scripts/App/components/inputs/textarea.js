App.FormTextareaComponent = App.FormInputComponent.extend({
    templateName: 'components/inputs/formtextarea',
    layoutName: 'components/inputs/formtextarea',
    baseId: 'textarea_',
    rows: function () {
        return this.get('cfg.rows') ? this.get('cfg.rows') : 2;
    }.property('cfg'),
    optionalText: function () {
        return this.get('cfg.optionalText');
    }.property('cfg'),
    noPadding: function () {
        return this.get('cfg.noPadding') ? this.get('cfg.noPadding') : false;
    }.property('cfg'),
    cdisabled: false,
    noMarginTop: function () {
        return this.get('cfg.noMarginTop') || !this.get('labelText');
    }.property('cfg'),
    afterDidInsertElement: function () {
        var self = this;
        if (this.get('changeParam') != undefined) {
            this._element.on('change', function () {
                self.set('changeParam', true);
            });
        }
    }
})