/// <reference path="/Scripts/App/bcommon/references.js" />
App.BaseValidateComponent = Ember.Component.extend({
    updateError: function () {
        var self = this;
        setTimeout(function () {
            if (self.get('isValidated')) {
                $('#' + self.get('errorDivId')).stop().fadeOut();
            }
            if (!self.get('isValidated')) {
                $('#' + self.get('errorDivId')).stop().fadeIn();
            }
        }, 200);
    },
    isValidated: function () {
        var validated = true;
        var validate = this.get('cfg.validate');
        if (validate) {
            switch (validate.type) {
                case 'req':
                    if (!this.get('cvalue')) {
                        validated = false;
                    }
                    break;
                case 'confirmpassword':
                    if (!this.get('cvalue')) {
                        this.set('errorText', this.get('cfg.validate.reqText'))
                        validated = false;
                    } else {
                        if (this.get('cvalue') != this.get('cPassword')) {
                            this.set('errorText', this.get('cfg.validate.text'))
                            validated = false;
                        }
                    }
                    break;
            }
        }
        return validated;
    }.property('cfg.validate', 'cvalue', 'cPassword'),

    errorDivId: function () {
        return this.get('inputId') + '_errorDiv';
    }.property('inputId'),
    observerValue: function () {
        this.updateError();
    }.observes('cvalue'),
    focus: function (selectAll) {
        $('#' + this.get('inputId')).focus();
        if (selectAll) {
            $('#' + this.get('inputId')).select();
        }
    },
    didInsertElement: function () {
        cfg = this.get('cfg') || {};
        this.set('cid', cfg.id);

        if (cfg.validate) {
            this.set('cfg.validate.component', this);
            this.set('errorText', this.get('cfg.validate.text'));
        }
        if ($.isFunction(this.initialize)) {
            this.initialize();
        }
    },
    labelText: function () {
        return this.get('cfg.text') ? this.get('cfg.text') : null;
    }.property('cfg')
})