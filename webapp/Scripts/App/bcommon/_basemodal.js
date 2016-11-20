/// <reference path="references.js" />

App.ModalBaseController = Ember.Controller.extend({
    saveButtonText: 'Guardar',
    saveButtonClass: null,
    saveButtonDisabled: false,
    cancelButtonText: 'Cancelar',
    titleText: '&nbsp;',
    showCloseButton: true,
    showSaveButton: true,
    showCancelButton: true,
    onLoad: function () { },
    leftButton:{
        show: false,
        css: 'btn-default',
        action: '',
        text:''
    },
    actions: {
        confirm: function (view) {
        },
        cancel: function (view) {
            view.hide();
        },
    },
    validar: function (cfg) {
        var validated = true;
        var focused = false;
        $.each(cfg, function (property, value) {
            if (Ember.get(value, 'validate')) {
                Ember.get(value, 'validate.component').updateError();
                if (!Ember.get(value, 'validate.component.isValidated')) {
                    validated = false;

                    if (!focused) {
                        Ember.get(value, 'validate.component').focus();
                        focused = true;
                    }
                }
            }
        });
        return validated;
    },
    goApi: function (data, action, type, controller) {
        return new Ember.RSVP.Promise(function (resolve, reject) {

            try {
                $.ajax({
                    url: App.UrlApi + '/imac/' + controller + '/' + action,
                    type: type,
                    data: data,
                    dataType: 'json',
                    cache: false,
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error)
                    }
                });
            } catch (ex) {
                reject(ex);
            }
        });
    },
    hide: function () {
        this.get('modalview').hide();
    }
});

App.ModalBaseView = Ember.View.extend({
    classNames: ['modal', 'modal-wide', 'fade'],
    layoutName: 'bcommon/bmodal',
    attributeBindings: ['data-show'],
    'data-show': 'true',
    modalDialogId: function () {
        return 'modal_' + this.get('renderedName');
    }.property('renderedName'),
    modalBodyId:function(){
        return 'modal_body_' + this.get('renderedName');
    }.property('renderedName'),
    didInsertElement: function () {
        this.set('controller.modalview', this);
        this.set('controller.beforeDestroyElement', null);
        var self = this;
        self.$().modal({
            backdrop: 'static',
            keyboard: false
        });
        // Once the modal is hidden, destroy it. Otherwise the route cannot
        // reshow it.
        self.$().on('hidden.bs.modal', function () {
            if (self.get('controller.submodal')) { $('body').addClass('modal-open'); }
            self.destroy();
        });

        self.$().on('shown.bs.modal', function () {
            var height = $(window).height() - (self.get('controller.hideFooter') ? 125 : 190);
            $('#' + self.get('modalBodyId')).css("max-height", height);
            self.afterRenderEvent();
        });

        this.modalResize();
        this.get('controller').addObserver('modalsize', this.modalResize);
        this.set('controller.highlight', function () {
            $('#' + self.get('modalDialogId')).css('opacity', '0');
            $('#' + self.get('modalDialogId')).fadeTo(800, 1.0);
        });
    },

    modalResize: function () {
        var doSize = function (params) {
            switch (params.size) {
                case 'l':
                    $('#' + params.modalDialogId).css("max-width", 1240);
                    break;
                case 'm':
                    $('#' + params.modalDialogId).css("max-width", 950);
                    break;
                case 'xs':
                    $('#' + params.modalDialogId).css("max-width", 280);
                    break;
                default:
                    $('#' + params.modalDialogId).css("max-width", 600);
                    break;
            }
        };
        doSize(this.get('controller') ? {
            size: this.get('controller.modalsize'),
            modalDialogId: this.get('modalDialogId')
        } : {
            size: this.get('modalsize'),
            modalDialogId: this.get('modalview.modalDialogId')
        });
    },

    afterRenderEvent: function () {
    },

    willDestroyElement: function () {
        this.get('controller').removeObserver('modalsize', this.modalResize);
        if ($.isFunction(this.get('controller.beforeDestroyElement'))) {
            this.get('controller').beforeDestroyElement();
        }
        if ($.isFunction(this.beforeDestroyElement)) {
            this.beforeDestroyElement();
        }
        this.$().off('hidden.bs.modal');
    },
    hide: function () {
        this.$().modal('hide');
        if (!this.get('controller.submodal')) {
            $('.modal-backdrop').remove();
        }
    }
});
