/// <reference path="../../bcommon/references.js" />
App.FileUploadComponent = Ember.Component.extend({
    templateName: 'components/fileupload/filebase',
    showSelect: function () {
        return this.get('cvalue') ? false : true;
    }.property('cvalue'),
    cname: function () {
        return 'upload_' + (this.get('cfg.id') ? this.get('cfg.id') : Ember.guidFor(this));
    }.property('cfg'),
    caccept: function () {
        var types = [];
        if (this.get('cfg.fileTypes')){
            $.each(this.get('cfg.fileTypes'), function (index, item) {
                switch (item) {
                    case 'image': types.push('image/*'); break;
                    case 'document':
                        types.push('application/msword');
                        types.push('application/pdf');
                        break;
                    case 'video': types.push('video/*'); break;
                    case 'all':
                    default: types.push('*');
                        break;
                }
            });
        }
        if (types.length == 0) {
            types.push('*');
        }
        return types.join(',');
    }.property('cfg'),
    didInsertElement: function () {
        var self = this;
        var crossdomain = true;
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            var ieversion = new Number(RegExp.$1);
            if (ieversion <= 9) {
                this.set('notSupport', true);
                crossdomain = false;
            }
        }
        var _config = this.get('cfg');
        this.configureDropZone(_config);
        this.configureUpload(_config, crossdomain);
    },
    validateExten: function (exten) {
        //var _config = this.get('cfg');
        //if (_config.supportFiles) {
        //    if (!_config.supportFiles.contains(exten)) {
        //        var extenSuppFiles = this.config.supportFiles;
        //        if (extenSuppFiles.indexOf('.jpg') != -1 || extenSuppFiles.indexOf('.png') != -1) {
        //            supportTypeFiles = I18n.t('validationMessage.autoupload.supportFilesLogoMessage');
        //        } else {
        //            supportTypeFiles = this.config.supportFiles + " is supported";
        //        }
        //        doPopover('#' + this.get('idinput'), supportTypeFiles, "top");
        //        return false;
        //    }
        //}
        //$('.popover').popover('destroy');
        return true;
    },
    element: { fileElement: null },
    url: function () {
        var _config = this.get('cfg');
        var queries=[];
        if (_config.folder){
            queries.push('Folder='+_config.folder);
        }
        if (_config.fileName){
            queries.push('FileName=' + _config.fileName + this.get('ext'));
        }
        return App.UrlApi + '/imac/files/Upload' + (queries.length > 0 ? ('?' + queries.join('&')) : '');
    }.property('cfg'),
    configureUpload: function (_config, crossdomain) {
        var controller = this.get('targetObject');
        var self = this;
        this.set('element.fileElement', $('#' + _config.id));
        var element = this.get('element.fileElement');
        //element = $('#' + _config.id);
        element.fileupload({
            dataType: 'json',
            maxFileSize: 5000000,
            //url:self.get('url'),

            autoUpload: _config.auto == true ? true:false,
            sequentialUploads: true,
            progressInterval: 100,
            crossDomain: crossdomain,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                self.set('uploadprogress', progress);
            },
            add: function (e, data) {
                var ext = "." + data.files[0].name.split('.').pop();
                self.set('ext', ext);
                if (self.validateExten(ext)) {
                    //var file;
                    //if (_config.cfilename) {
                    //    file = (_config.cfilename + ext).replace(/\s+/g, '_');
                    //} else {
                    //    file = (data.files[0].name).replace(/\s+/g, '_');
                    //}
                    self.set('uploadprogress', 0);
                    self.set('element.data', data);
                    if (_config.auto == true) {
                        self.send('save');
                    }
                }
            },
            error: function (jqxhr) {
                self.set('element.status', 'error');
            }
        });
    },
    configureDropZone: function (_config) {
        $('#' + _config.zone).bind({
            dragleave: function (e) {
                e.preventDefault();
                $('#' + _config.zone).css("backgroundColor", "#ffffff");
            },
            drop: function (e) {
                e.preventDefault();
                e.stopPropagation();
                fileName = '';
                $('#' + _config.id).replaceWith($('#' + _config.id).val('').clone(true));
                var current = e.originalEvent.dataTransfer.files;
                fileName = _config.fileName + "." + current[0].name.split('.').pop();
                $('#' + _config.id).fileupload('add', { files: current });
                $('#' + _config.zone).css("backgroundColor", "#ffffff");
            },
            dragenter: function (e) {
                e.preventDefault();
                $('#' + _config.zone).css("backgroundColor", "#5CB85C");
            },
            dragover: function (e) {
                e.preventDefault();
                $('#' + _config.zone).css("backgroundColor", "#5CB85C");
            }
        });
    },
    actions: {
        save: function () {
            var self = this;
            $('#' + this.get('cfg.id')).fileupload('option', 'url', this.get('url'));
            this.get('element.data').submit()
                .success(function (result, textStatus, jqXHR) {
                    if (self.get('cfg.onSave')) {
                        self.get('targetObject').send(self.get('cfg.onSave'), result, textStatus, jqXHR);
                    }
                })
                .error(function (jqXHR, textStatus, errorThrown) {
                    if (self.get('cfg.onError')) {
                        self.get('targetObject').send(self.get('cfg.onError'), jqXHR, textStatus, errorThrown);
                    }
                });

        }
    }
});