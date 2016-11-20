App.MomentCompComponent = Ember.Component.extend({
    templateName: 'components/moment-comp',
    momentText: '',
    format: 'DD/MM/YYYY h:mm:ss A',
    tagName: 'span',
    didInsertElement: function(){
        this.changeDate();
        this.addObserver('value', this.changeDate);
        this.addObserver('format', this.changeDate);
    },
    changeDate: function () {
        this.set('momentText', this.get('value') ? moment(this.get('value')).format(this.get('format')) : null);
    },
    willDestroyElement: function () {
        this.removeObserver('value', this.changeDate);
        this.removeObserver('format', this.changeDate);
    }
});