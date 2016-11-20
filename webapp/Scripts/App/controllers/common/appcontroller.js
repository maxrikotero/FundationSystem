App.ApplicationController = Ember.Controller.extend({
    needs: ['application'],
    isLogin: true,
    searchTerm: null,
    onLoad: function(){},
    goApi: function (data, action, type, controller) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
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
        });
    },
    activePage: function () {
        var path = this.currentPath ? this.currentPath.toLowerCase() : null;
        return {
            myinfo: path == 'myinfo',
            dashboard: path == 'dashboard',
            ambulatorio: path == 'ambulatorio',
            usuarios: path == 'usuarios',
            pacientes: path == 'pacientes',
            medicos: path == 'medicos',
            habitaciones: path == 'habitaciones' || path == 'alimentacion'
        };
    }.property('currentPath'),
    actions: {
        refreshSession: function () {
            if (this.get('session.isAuthenticated')) {
                var date = new Date($.now());
                date.setMinutes(date.getMinutes() + 30);
                this.set('session.expirationTime', date);
            }
        },
        logout: function () {
            this.get('session').invalidate();
        },
        search: function () {
            //TODO
            showAlert('No Implementado', 'La búsqueda aún no se implementó', 'danger');
            this.set('model.searchTerm', null);
        },
        nuevoPaciente: function () {
            var self = this;
            this.goApi(null, 'getoptions', 'GET', 'paciente').then(
                function (data) {
                    self.send('renderModal', 'pacientemodal', {
                        model: App.imacmodel.create(),
                        modalsize: 'm',
                        isEdit: false,
                        tiposDocumentos: data.tiposDocumentos,
                        sexos: data.sexos,
                        estadosCiviles: data.estadosCiviles,
                        obrasSociales: Ember.A()
                    });
                },
                function (error) {
                });
        },
        nuevoMedico: function () {
            this.send('renderModal', 'medicomodal', {
                //model: App.imacmodel.create({
                //    apellido: "villagran",
                //    matricula: '20311943023',
                //    estadoCivil: 1,
                //    fechaNacimiento: "19/12/1984",
                //    nombre: "jose",
                //    nroDocumento: "31194302",
                //    sexo: 1,
                //    tipoDocumento: 1
                //}),
                model: App.imacmodel.create(),
                modalsize: 'm',
                isEdit: false
            });
        },
        nuevoUsuario: function () {
            this.send('renderModal', 'nuevousuariomodal', {
                model: App.imacmodel.create(),
            });
        }
    },
});
