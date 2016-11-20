/// <reference path="../../bcommon/references.js" />

App.EmailCompComponent = App.FormInputComponent.extend({
    layoutName: 'components/inputs/email',
    addDisabled: function () {
        return $.isArray(this.get('data')) &&
            $.grep(this.get('data'),
                function (item, ix) {
                    return !App.emailRegex.test(item.value);
                }).length > 0;
    }.property('data.@each', 'data.@each.value'),
    refreshUpDownDisabled: function () {
        var self = this;
        if ($.isArray(this.get('data')) && this.get('data').length) {
            $.each(this.get('data'), function (i, email) {
                Ember.set(email, 'downDisabled', i == self.get('data').length - 1 || Ember.get(email, 'toRemove'));
                Ember.set(email, 'upDisabled', i == 0 || Ember.get(email, 'toRemove'));
                Ember.set(email, 'toRemove', Ember.get(email, 'toRemove') ? true : false);
                Ember.set(email, 'disabled', email.toRemove || (email.predeterminado && email.id != null) );
            });
        }
    },
    afterDidInsertElement: function () {
        if (!$.isArray(this.get('data')) || !this.get('data').length) {
            var data = Ember.A();
            data.pushObject({
                id: null,
                css: 'form-control',
                inputId: 'email1',
                value: null,
                placeholder: 'E-Mail',
                disabled: false,
                predeterminado: true,
                order: 1
            });
            this.set('data', data);
        }
        this.refreshUpDownDisabled();
        this.addObserver('data', this.refreshUpDownDisabled);
        this.addObserver('data.@each', this.refreshUpDownDisabled);
        this.addObserver('data.@each.predeterminado', this.refreshUpDownDisabled);
    },
    actions: {
        addEmail: function () {
            var order = this.get('data')[this.get('data').length - 1].order + 1;
            this.get('data').pushObject({
                id: null,
                css: 'form-control',
                inputId: 'email' + order,
                value: null,
                placeholder: 'E-Mail',
                disabled: false,
                predeterminado: false,
                order: order
            });
            setTimeout(function () {
                $('#email' + order).focus();
            }, 200);
        },
        predeterminado: function (order) {
            this.get('data').setEach('predeterminado', false);
            Ember.set(this.get('data').findBy('order', order), 'predeterminado', true);
            $('#email' + order).focus();
        },
        down: function (order) {
            var data = this.get('data');
            var newData = [];
            $.each(data, function (i, item) {
                if (item.order == order || item.order == order + 1) {
                    var itemToPush = data.findBy('order', order + (item.order == order ? 1 : 0));
                    newData.push({
                        id: itemToPush.id,
                        css: itemToPush.css,
                        inputId: 'email' + (i + 1),
                        value: itemToPush.value,
                        placeholder: 'E-Mail',
                        disabled: itemToPush.disabled,
                        predeterminado: itemToPush.predeterminado,
                        toRemove: itemToPush.toRemove,
                        order: (i + 1)
                    });
                } else {
                    Ember.set(item, 'order', (i + 1));
                    Ember.set(item, 'inputId', 'email' + (i + 1));
                    newData.push(item);
                }
            });
            this.set('data', newData);
        },
        up: function (order) {
            var data = this.get('data');
            var newData = [];
            $.each(data, function (i, item) {
                if (item.order == order - 1||item.order == order) {
                    var itemToPush = data.findBy('order', order - (item.order == order ? 1 : 0));
                    newData.push({
                        id: itemToPush.id,
                        css: itemToPush.css,
                        inputId: 'email' + (i + 1),
                        value: itemToPush.value,
                        placeholder: 'E-Mail',
                        predeterminado: itemToPush.predeterminado,
                        toRemove: itemToPush.toRemove,
                        order: (i + 1)
                    });
                } else {
                    newData.push({
                        id: item.id,
                        css: item.css,
                        inputId: 'email' + (i + 1),
                        value: item.value,
                        placeholder: 'E-Mail',
                        predeterminado: item.predeterminado,
                        toRemove: item.toRemove,
                        order: (i + 1)
                    });
                }
            });
            this.set('data', newData);
        },
        remove: function (order) {
            if (!this.get('data').findBy('order', order).id) {
                var data = this.get('data');
                var newData = [];
                var norder = 1;
                $.each(data, function (i, item) {
                    if (item.order != order) {
                        newData.push({
                            id: item.id,
                            css: item.css,
                            inputId: 'email' + norder,
                            value: item.value,
                            placeholder: 'E-Mail',
                            predeterminado: item.predeterminado,
                            toRemove: item.toRemove,
                            order: norder
                        });
                        norder += 1;
                    }
                });
                this.set('data', newData);
            } else {
                Ember.set(this.get('data').findBy('order', order), 'toRemove', !this.get('data').findBy('order', order).toRemove);
                this.refreshUpDownDisabled();
            }
        }
    },
    willDestroyElement: function () {
        this.removeObserver('data', this.refreshUpDownDisabled);
        this.removeObserver('data.@each', this.refreshUpDownDisabled);
        this.removeObserver('data.@each.predeterminado', this.refreshUpDownDisabled);
    }
});