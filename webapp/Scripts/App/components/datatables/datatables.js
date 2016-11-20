App.GridCompComponent = Ember.Component.extend({
    baseid: 'grid_',
    compId: function () {
        return this.baseid + (this.get('elementId'))
    }.property('compcfg'),
    actionRemove: function () {
        return 'removeRow';
    }.property('compcfg'),
    cdata: null,
    griduniqueId: 'Id',
    //editBtn: function () {
    //    var self = this;
    //    var compcfgbtn = this.get('gridConfig.btnEdit');
    //    if (compcfgbtn) {
    //        var action = 'editView';
    //        if (compcfgbtn.actionName)
    //            action = compcfgbtn.actionName;
    //        var valueToReturn = {
    //            "sName": "editbtn",
    //            "bSearchable": false,
    //            "bSortable": false,
    //            "allowHTML": true,
    //            'sWidth': '10px',
    //            "mRender": function (data, type, rowData) {
    //                return '<button type="button" class="btn btn-xs btn-info" onclick="getView($(this)).get(\'targetObject\').send(\'' + action + '\',' + rowData[self.griduniqueId] + ')" data-toggle="tooltip" data-placement="left" title="' + I18n.t('btn.edit') + '"><div class="glyphicon glyphicon-pencil" /></button>';
    //            }
    //        }
    //        return valueToReturn;
    //    }
    //    return null;
    //}.property('gridConfig'),

    //delBtn: function () {
    //    var self = this;
    //    var compcfgbtn = this.get('gridConfig.btnRemove');
    //    if (compcfgbtn) {
    //        var action = 'removeRow';
    //        if (compcfgbtn.actionName)
    //            action = compcfgbtn.actionName;

    //        var valueToReturn = {
    //            "sName": "deletebtn",
    //            "bSearchable": false,
    //            "bSortable": false,
    //            "allowHTML": true,
    //            'sWidth': '10px',
    //            "mRender": function (data, type, rowData) {
    //                if (rowData[self.griduniqueId] != 0) {
    //                    if (self.get('excludeId') != rowData[self.griduniqueId]) {
    //                        return '<button type="button" class="btn btn-xs btn-info" onclick="getView($(this)).get(\'targetObject\').send(\'' + action + '\',' + rowData[self.griduniqueId] + ')" data-toggle="tooltip" data-placement="left" title="' + I18n.t('btn.delete') + '"><div class="glyphicon glyphicon-trash" /></button>';
    //                    } else {
    //                        return '';
    //                    }
    //                }

    //            }
    //        };
    //        return valueToReturn;
    //    }
    //    return null;
    //}.property('gridConfig'),

    gridConfig: Ember.A(),
    headerGrid: function () {
        var template = "",
            headerid = 'header_' + this.elementId;
        var configHeader = this.get('gridConfig.header');

        if (configHeader) {
            template = configHeader.template;
        }
        
        var arrayheader = { 'headerid': headerid, 'template': template };

        return arrayheader;
    }.property('gridConfig'),

    cemptymessage: 'No se encontraron datos',
    classNames: ['display'],
    tagName: 'table',

    didInsertElement: function () {
        this._super.apply(this, arguments);
        var self = this;
        var config = this.get('gridConfig.config');
        var columns = this.get('gridConfig.columns');

        var data = this.get('cdata');
        var _headerGrid = this.get('headerGrid');

        if (data === null || data === undefined) {
            data = [];
        }

        if (config && config.cemptymessage) {
            this.set('cemptymessage', config.cemptymessage);
        }
        //if (this.get("security")) {
        //    if (!columns.anyBy('sName', 'editbtn')) {
        //        if (this.get('editBtn'))
        //            columns.pushObject(this.get('editBtn'));
        //    }
        //    if (!columns.anyBy('sName', 'deletebtn')) {
        //        if (this.get('delBtn'))
        //            columns.pushObject(this.get('delBtn'));
        //    }

        //}
        var fnclickrow = this.cfnclickrow;
        var currentdom = '<"toolbar">frtip'
        
          




        var _gridOptions = [];

        _gridOptions['sDom'] = currentdom;
    //    _gridOptions['responsive'] = true;        
        _gridOptions["bProcessing"] = true;
        _gridOptions["bLengthChange"] = false;
        _gridOptions["aaData"] = data;
        _gridOptions["bPaginate"] = config.cpaginate != null ? config.cpaginate : true;
        _gridOptions["bInfo"] = config.cinfo != null ? config.cinfo : true;
        _gridOptions["aoColumns"] = columns;
        _gridOptions["order"] = [[config.corder != null ? config.corder : 0, config.cordertype != null ? config.cordertype : "asc"]];
        _gridOptions["iDisplayLength"] = config.cdisplay != null ? config.cdisplay : 10;
        _gridOptions["searching"] = config.csearch != null ? config.csearch : true;
        _gridOptions["bFilter"] = config.cfilter != null ? config.cfilter : true,
        _gridOptions["bAutoWidth"] = config.cautowidth != null ? config.cautowidth : false;
        _gridOptions["fnRowCallback"] = config.cRowChangeColor ?
                    function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                        //$(nRow).css({ "color": "black" });
                        //if (aData["StatusId"] == 3) $(nRow).css({ "color": "black" });
                        if (aData["Status"] == "requestStatus.expired") {
                            $(nRow).addClass('row-border row-border2');
                        }
                        return nRow;
                    } : null;
        _gridOptions["oLanguage"] = {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": this.cemptymessage,
            "sInfo": "Registros <b>_START_</b> a <b>_END_</b> - Total: <b>_TOTAL_</b>",
            "sInfoEmpty": "",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ".",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        };
        if (config.createdCell) {
            _gridOptions["aoColumnDefs"] = [{
                aTargets: config.createdCell.targets,
                fnCreatedCell: config.createdCell.callback
            }];
        }

        if (config.cscroll) {
            _gridOptions["sScrollY"] = "300px";
            _gridOptions["paging"] = false;
            _gridOptions["bScrollCollapse"] = true;
            _gridOptions["deferRender"] = true;
        }
        /* Server Side */
        if (config.serverAction) {
            _gridOptions['bServerSide'] = true;
            _gridOptions['sAjaxSource'] = config.serverAction;
        }
        /* Server Side END */
        this._grid = this.$().dataTable(_gridOptions);

        if (config.isGroupingGrid) {
            this._grid.rowGrouping({
                iGroupingColumnIndex: 2,
                sGroupingColumnSortDirection: "asc",
                iGroupingOrderByColumnIndex: 7,
                iExpandGroupOffset: -1,
                bExpandableGrouping: true,
                bExpandSingleGroup: false,
            });
        }          
        this._grid.css("width", "100%");
        if (config.ccursor) {
            this._grid.css('cursor', 'pointer');
        }
        if (_headerGrid.headerid) {
            $("." + _headerGrid.headerid).html(_headerGrid.template);
        }
        var controller = this.get('targetObject');
        controller.set('grid', this._grid);

        if (config.ActionClick) {
            this._grid.on("click", "tr", function (e) {
                var data = self._grid.fnGetData(this);
                if (!data) {
                    e.stopPropagation();
                    var parent = $(this).parent();
                    while (!data && parent && parent.attr('id') != 'IMACwebapp-app') { //TODO - mover a settings todo lo relacionado a nombres de la clinica
                        data = self._grid.fnGetData(parent);
                        parent = parent.parent();
                    }
                }
                if (config.ActionClickParamObjData) {
                    self.get('targetObject').send(config.ActionClick, data);
                } else {
                    self.get('targetObject').send(config.ActionClick, data[self.griduniqueId]);
                }

            });
        };

        this.addObserver('cdata', this.datachange);
    },
    datachange: function () {
        if (this._grid) {
            this._grid.fnClearTable();
            if (this.get('cdata')) {
                this._grid.fnAddData(this.get('cdata'));
            }
        }
    },
    willDestroyElement: function () {
        this._grid.fnClearTable();
        this.removeObserver('cdata', this.datachange);
    }
});

function getView($el) {
    var item = Ember.View.views[$el.closest(".ember-view").attr("id")];
    return item;
}