/// <reference path="../../bcommon/references.js" />
App.FormSelectComponent = App.BaseValidateComponent.extend({
    templateName: 'components/select/formselect',
    baseId: 'select_',
    inputId: function () {
        return this.get('cid') || (this.get('baseId') + Ember.guidFor(this));
    }.property('cid'),
    content: Ember.A(),
    allowClear: function () {
        return this.get('cfg.allowClear') ? this.get('cfg.allowClear') : false;
    }.property('cfg'),
    actionRemove: function () {
        return this.get('cfg.actionRemove') ? this.get('cfg.actionRemove') : false;
    }.property('cfg'),
    placeholder: function () {
        return this.get('cfg.placeholder') ? this.get('cfg.placeholder') : null;
    }.property('cfg'),
    cenabled: function () {
        return this.get('cfg.enabled') ? this.get('cfg.enabled') : true;
    }.property('cfg'),
    initialize: function () {
        if (this.get('query')) {
            this.set('queryAction', this.get('query'));
            this.set('query', 'query');
        }
    },
    addAction: function () {
        return this.get('cfg.addAction') ? this.get('cfg.addAction')
            : null;
    }.property('cfg'),
    addDisabled: function () {
        return this.get('cfg.addDisabled') != null ? this.get('cfg.addDisabled') : false;
    }.property('cfg'),
    isValidated: function () {
        var validate = this.get('cfg.validate');
        if (validate) {
            switch (validate.type) {
                case 'req':
                    if (!this.get('cvalue')) {
                        return false;
                    }
                    return true;
                case 'regexp':
                    break;
            }
        } else {
            return true;
        }
    }.property('cfg.validate', 'cvalue'),
    _element: null,
    focus: function () {
        this._element.select2("open");
    },
    minimumInputLength: null,
    actions: {
        query: function (query, deferred) {
            this.get('targetObject').send(this.get('queryAction'), query, deferred);
        },
        addAction: function () {
            this.get('targetObject').send(this.get('addAction'));
        }
    }
})