App.InputDocumentoComponent = Ember.Component.extend({
    templateName: 'components/inputs/documento',
    baseId: 'tipoDocumento_',
    tiposDocumentos: Ember.A(),
    inputCellClass: function () {
        return this.get('cfg.text') ? (this.get('cfg.labelSm2') ? 'col-sm-10' : 'col-sm-8') : 'col-sm-12';
    }.property('cfg'),
    inputId: function () {
        return this.get('cid') || (this.get('baseId') + Ember.guidFor(this));
    }.property('cid'),
    didInsertElement: function () {
        var cfg = this.get('cfg') || {};
        this.set('cid', cfg.id);
        this.set('labelText', cfg.text);
        this.set('placeholder', cfg.placeholder);
        this.set('selectPlaceholder', cfg.selectPlaceholder);

        if (cfg.validate) {
            this.set('cfg.validate.component', this);
            this.set('errorText', { tipo: this.get('cfg.validate.textTipo'), numero: this.get('cfg.validate.textNro') });
        }
    },
    showTipoError: false,
    updateError: function () {
        if (this.get('isValidated')) {
            $('#' + this.get('errorDivId')).fadeOut();
        }
        if (!this.get('isValidated')) {
            $('#' + this.get('errorDivId')).fadeIn();
        }
    },
    isValidated: function () {
        var validated = true;
        var validate = this.get('cfg.validate');
        if (validate) {
            this.set('showTipoError', !this.get('isTipoValidated'));
            return this.get('isTipoValidated') && this.get('isNumeroValidated');
        }
        return validated;
    }.property('cfg.validate', 'ctdvalue', 'cvalue'),
    isTipoValidated: function () {
        if (!this.get('ctdvalue')) {
            return false;
        } else {
            return true;
        }
    }.property('ctdvalue'),
    isNumeroValidated: function () {
        if (!this.get('cvalue')) {
            return false;
        } else {
            return true;
        }
    }.property('cvalue'),
    errorDivId: function () {
        return this.get('inputId') + '_errorDiv';
    }.property('inputId'),
    focus: function () {

    }
});