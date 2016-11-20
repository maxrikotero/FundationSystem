/// <reference path="../../bcommon/references.js" />
App.ChartJsComponent = Ember.Component.extend({
    colors: function () {
        return [
        { hex: '#152b39', rgb: '21,43,57' },
        { hex: '#1c4d92', rgb: '28,77,146' },
        { hex: '#0b83b8', rgb: '11,131,134' },
        { hex: '#34b196', rgb: '52,177,150' },
        { hex: '#4ec5c1', rgb: '78,197,193' },
        { hex: '#8cd8dc', rgb: '140,216,220' },
        { hex: '#ff7607', rgb: '255,118,7' },
        { hex: '#ffbb22', rgb: '255,187,34' },
        { hex: '#ffe473', rgb: '255,228,115' },
        { hex: '#e71433', rgb: '231,20,51' },
        { hex: '#ec4766', rgb: '236,71,102' },
        { hex: '#e1acaa', rgb: '225,172,170' },
        { hex: '#4a4a4a', rgb: '74,74,74' },
        { hex: '#bebebe', rgb: '190,190,190' },
        { hex: '#e0e0e0', rgb: '224,224,224' },
        ]
    }.property(),
    cdata: function () {
        var colors = Ember.A();
        this.get('colors').forEach(function (item) {
            colors.pushObject({ color: item, used: false });
        });
        function nextColor(data) {
            if (colors.findBy('used', false).length == 0) {
                colors.setEach('used', false);
            }
            var i = (new Date().getTime() * Math.floor((Math.random() * 10) + 1)) % colors.length;
            while (colors[i].used == true) {
                i = (new Date().getTime() * Math.floor((Math.random() * 10) + 1)) % colors.length;
            }
            colors[i].used = true;
            return colors[i].color;
        }
        var cdata = Ember.A();
        var labels = Ember.A();
        var self = this;
        switch (this.get('cfg.type')) {
            case 'Doughnut':
            case 'Pie':
                this.get('data').forEach(function (item) {
                    var color = nextColor(self.get('data'));
                    cdata.pushObject({
                        label: item.label,
                        value: item.value,
                        color: rgba(color.rgb, '0.8'),
                        highlight: rgba(color.rgb, '1')
                    });
                    labels.pushObject({
                        label: item.label, value: item.value,
                        style: 'background-color: ' + rgba(color.rgb, '0.8') +
                                ';border: solid 2px ' + rgba(color.rgb, '1')
                    });
                });
                break;
            case 'Line':
                var datasets = Ember.A();
                this.get('data.datasets').forEach(function (item) {
                    var color = nextColor(self.get('data.datasets'));
                    datasets.pushObject({
                        label: item.label,
                        fillColor: rgba(color.rgb, '0.2'),
                        strokeColor: rgba(color.rgb, '1'),
                        pointColor: rgba(color.rgb, '1'),
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: rgba(color.rgb, '1'),
                        data: item.data,

                    });
                    labels.pushObject({
                        label: item.label,
                        style: 'background-color: ' + rgba(color.rgb, '0.5') +
                            ';border: solid 2px ' + rgba(color.rgb, '0.8')
                    });
                });
                cdata = {
                    labels: this.get('data.labels'),
                    datasets: datasets
                };
                break;
            case 'Radar':
            case 'Bar':
                var datasets = Ember.A();
                this.get('data.datasets').forEach(function (item) {
                    var color = nextColor(self.get('data.datasets'));
                    datasets.pushObject({
                        label: item.label,
                        data: item.data,
                        fillColor: rgba(color.rgb, '0.7'),
                        strokeColor: rgba(color.rgb, '0.9'),
                        highlightFill: rgba(color.rgb, '0.9'),
                        highlightStroke: rgba(color.rgb, '1')

                    });
                    labels.pushObject({
                        label: item.label,
                        style: 'background-color: ' + rgba(color.rgb, '0.5') +
                            ';border: solid 2px ' + rgba(color.rgb, '0.8')
                    });
                });
                cdata = {
                    labels: this.get('data.labels'),
                    datasets: datasets
                };
                break;
            default:
                cdata.pushObject(item);
                this.set('includeLabels', false);
                break;
        }
        return {
            data: cdata,
            labels: labels
        };
    }.property('data'),
    templateName: 'components/charts/chart',
    includeLabels: function () {
        return this.get('cfg.includeLabels') != null ? this.get('cfg.includeLabels') : false;
    }.property('cfg'),
    cid: function () {
        return this.get('cfg.id') ? this.get('cfg.id') : Ember.guidFor(this);
    }.property('cfg'),
    chartElement: null,
    cwidth: function () {
        return $('#' + this.get('cid')).parent().width();
    }.property('cid'),
    chartAreaClass: function () {
        var includeLabels = this.get('includeLabels');
        switch (this.get('cfg.type')) {
            case 'Doughnut':
            case 'Pie':
            case 'Radar':
                return includeLabels ? 'col-md-7' : 'col-xs-12';
            case 'Bar':
                return includeLabels ? 'col-md-8' : 'col-xs-12';
            case 'Line':
                return includeLabels ? 'col-md-10' : 'col-xs-12';
            default:
                return 'col-xs-12';
                break;
        }
    }.property('cfg'),
    labelsAreaClass: function () {
        var includeLabels = this.get('includeLabels');
        switch (this.get('cfg.type')) {
            case 'Doughnut':
            case 'Pie':
            case 'Radar':
                return includeLabels ? 'col-md-5' : 'hidden';
            case 'Bar':
                return includeLabels ? 'col-md-4' : 'hidden';
            case 'Line':
                return includeLabels ? 'col-md-2' : 'hidden';
            default:
                return 'hidden';
                break;
        }
    }.property('cfg'),
    showButton: function () {
        return $.isFunction(this.get('cfg.button.action'));
    }.property('cfg'),
    initialize: function () {
        var cfg = this.get('cfg');
        var data = this.get('cdata.data');
        var options = {};
        if (cfg.options && $.isPlainObject(cfg.options)) {
            options = cfg.options;
        }
        options['tooltipFontFamily'] = "'Source Sans Pro',sans-serif";
        options['tooltipFontSize'] = 12;
        $('#' + this.get('cid')).css('width', this.get('cwidth'));
        this.set('chartElement', document.getElementById(this.get('cid')).getContext("2d"));
        switch (Ember.get(cfg, 'type')) {
            case 'Doughnut':
                $('#' + this.get('cid')).css('height', this.get('cwidth'));
                new Chart(this.get('chartElement')).Doughnut(data, options);
                break;
            case 'Radar':
                $('#' + this.get('cid')).css('height', this.get('cwidth'));
                new Chart(this.get('chartElement')).Radar(data, options);
                break;
            case 'Bar':
                $('#' + this.get('cid')).css('height', this.get('cwidth') / 2);
                options['scaleFontFamily'] = "'Source Sans Pro',sans-serif";
                options['scaleFontSize'] = 10;
                options['tooltipTitleFontFamily'] = "'Source Sans Pro',sans-serif";
                options['tooltipTitleFontSize'] = 14;

                new Chart(this.get('chartElement')).Bar(data, options);
                break;
            case 'Line':
                $('#' + this.get('cid')).css('height', $.isNumeric(this.get('cfg.maxHeight')) && this.get('cwidth') / 2 > this.get('cfg.maxHeight') ? this.get('cfg.maxHeight') : this.get('cwidth') / 2);
                options['scaleFontFamily'] = "'Source Sans Pro',sans-serif";
                options['scaleFontSize'] = 10;
                options['tooltipTitleFontFamily'] = "'Source Sans Pro',sans-serif";
                options['tooltipTitleFontSize'] = 14;

                new Chart(this.get('chartElement')).Line(data, options);
                break;
            default:
                new Chart(this.get('chartElement')).Pie(data, options);
                break;
        }
    },
    didInsertElement: function () {
        this.set('comp', this);
        this.initialize();
    },
    actions: {
        btnAction: function () {
            if ($.isFunction(this.get('cfg.button.action'))) {
                this.get('cfg.button').action();
            }
        }
    }
});