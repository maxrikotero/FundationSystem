App.PagerCompComponent = Ember.Component.extend({
    templateName: 'components/pager',
    spanId: function () {
        return 'pager_' + (this.get('cfg.id') ? this.get('cfg.id') : Ember.guidFor(this));
    }.property('cfg'),
    didInsertElement:function(){
        this.updatePager();
        this.addObserver('data', this.updatePager());
    },
    updatePager: function () {
        $('#' + this.get('spanId')).html('');
        var data = this.get('data');
        var self = this;
        if (data.pageCount) {
            $('#' + this.get('spanId')).bootpag({
                total: data.pageCount,
                maxVisible: 5
            }).on("page", function (e, page) {
                if (self.get('cfg.onPage')) {
                    self.get('targetObject').send(self.get('cfg.onPage'), page, e);
                }
            });
        }
    }
})