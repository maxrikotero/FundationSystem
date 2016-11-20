/// <reference path="/Scripts/App/bcommon/references.js" />
App.BaseView = Ember.View.extend({
    didInsertElement: function () {
        if ($.isFunction(this.get('afterRenderEvent'))) {
            this.afterRenderEvent();
        }
    },
    willDestroyElement: function () {
        if ($.isFunction(this.get('beforeDestroy'))) {
            this.beforeDestroy();
        }
        this._super();
    }
})