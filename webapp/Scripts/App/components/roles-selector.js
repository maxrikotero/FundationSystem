/// <reference path="../bcommon/references.js" />
App.RolesSelectorComponent = Ember.Component.extend({
    newRoleText: null,
    inputId: function () {
        return Ember.guidFor(this);
    }.property(),
    errorDivId: function () {
        return 'error-div-' + this.get('inputId');
    }.property('inputId'),
    isValidated: true,
    valueChange: function () {
        this.set('isValidated', this.get('newRoleText') ? true : false);
        if ($('#' + this.get('errorDivId')).css('display') == 'block')
            $('#' + this.get('errorDivId')).stop().fadeOut();
    }.observes('newRoleText'),
    errortype: true,
    actions: {
        postToggle: function (rol, view) {
            var self = this;
            this.get('targetObject').goApi({
                userId: this.get('userId'),
                roleId: rol.RoleId
            }, rol.isUserInRole ? 'removeuserfromrole' : 'addusertorole',
                'POST', 'usuario').then(
                function (response) {
                    switch (response.Status) {
                        case 'Ok':
                            showAlert('Rol ' + (rol.isUserInRole ? 'Removido' : 'Agregado'), 'Se ' + (rol.isUserInRole ? 'removió' : 'agregó') + ' el rol con éxito', 'success');
                            Ember.set(self.get('roles').findBy('RoleId', rol.RoleId), 'isUserInRole', !rol.isUserInRole);
                            response.Roles.forEach(function (item) {
                                Ember.set(self.get('roles').findBy('RoleId', item.RoleId), 'disableDelete', item.disableDelete);
                            });
                            //TODO - update current roles if is current logged user
                            //self.get('targetObject.session.')
                            break;
                        case 'No Action':
                            showAlert('No se realizaron cambios', '&nbsp;', 'warning');
                            break;
                    }
                    if (view) view.hide();
                }, function (error) {
                    showAlert('Error al ' + (rol.isUserInRole ? 'Remover' : 'Agregar') + ' Rol', 'Ocurrió un problema al ' + (rol.isUserInRole ? 'remover' : 'agregar') + ' el rol. Por favor intente nuevamente', 'danger');
                    if (view) view.hide();
                });
        },
        toggleRole: function (roleId) {
            var rol = this.get('roles').findBy('RoleId', roleId);
            if (this.get('inModal')) {
                this.send('postToggle', rol);
            } else {
                if (rol.RoleName.toLowerCase() == 'serveradmin') {
                    showAlert('No se Puede Remover', 'No se puede remover usted mismo del Rol &nbsp;&nbsp;<b style="font-size:1.2em">ServerAdmin</b>', 'warning');
                } else {
                    this.get('targetObject').send('renderModal', 'confirmmodal', {
                        targetComponent: this,
                        titleText: (rol.isUserInRole ? 'Remover' : 'Agregar') + ' Rol',
                        confirmText: '¿Está seguro de ' + (rol.isUserInRole ? 'Remover' : 'Agregar') + ' el Rol &nbsp;&nbsp;<b style="font-size:1.2em">' + rol.RoleName + '</b>&nbsp;&nbsp;?',
                        actionParam: rol,
                        sendAction: 'postToggle',
                        saveButtonText: 'Si',
                        cancelButtonText: 'Cancelar',

                    });
                }
            }
        },
        saveRole: function () {
            if (this.get('newRoleText')) {
                var self = this;
                if ($.grep(self.get('roles'), function (n) { return n.RoleName.toLowerCase() == self.get('newRoleText').toLowerCase() }).length == 0) {
                    this.get('targetObject').goApi({
                        RoleName: this.get('newRoleText'),
                        UserId: this.get('userId')
                    }, 'createrole', 'POST', 'usuario').then(function (response) {
                        if (response.Status == 'OK') {
                            self.set('roles', response.Roles);
                            self.set('newRoleText', null);
                            self.set('isValidated', true);
                            showAlert('Rol Guardado', 'Se guardó el Rol exitosamente', 'success');
                        } else {
                            showAlert('Error al Guardar el Rol', 'Ocurrió un error al guardar el Rol. Por favor, intente nuevamente', 'danger');
                        }
                    },
                    function (error) {
                        showAlert('Error al Guardar el Rol', 'Ocurrió un error al guardar el Rol. Por favor, intente nuevamente', 'danger');
                    });
                } else {
                    this.set('isValidated', false);
                    this.set('errortype', false);
                    $('#' + this.get('errorDivId')).stop().fadeIn();
                }
            } else {
                this.set('isValidated', false);
                this.set('errortype', true);
                $('#' + this.get('errorDivId')).stop().fadeIn();
            }
        },
        deleteRole: function (roleId) {
            var self = this;
            this.get('targetObject').goApi({
                userId: this.get('userId'),
                roleId: roleId
            }, 'deleterole', 'POST', 'usuario').then(
            function (response) {
                if (response.Status == 'OK') {
                    self.set('roles', response.Roles);
                    showAlert('Rol Eliminado', 'Se eliminó el rol con éxito', 'success');
                } else {
                    if (response.Message == 'Role assigned to users') {
                        Ember.set(self.get('roles').findBy('RoleId', roleId), 'disableDelete', true);
                        showAlert('Rol Asignado', 'No se puede eliminar el rol porque fue asignado a otro usuario', 'danger');
                    } else {
                        showAlert('Error al Eliminar Rol', 'Ocurrió un error al eliminar el Rol. Por favor, intente nuevamente', 'danger');
                    }
                }
            },
            function (error) {
                showAlert('Error al Eliminar Rol', 'Ocurrió un error al eliminar el Rol. Por favor, intente nuevamente', 'danger');
            });
        }
    }
});