App.RadioButtonGroupComponent = App.BaseValidateComponent.extend({
    templateName: 'components/radiobutton/radiobuttongroup',
    baseId: 'radio_',
    groupId: function () {
        return this.get('cid') || (this.get('baseId') + Ember.guidFor(this));
    }.property('cid'),
    items: Ember.A(),
    actions: {
        updateValue: function (value) {
            this.set('cvalue', value);
        }
    },
    focus: function () {

    }
});