App.Router.map(function () {
    this.route("login", { path: "/login" });
    this.resource('myinfo', { path: '/Perfil' });
    this.resource('dashboard', { path: 'Tablero' });
    this.resource('ambulatorio', { path: 'Servicio Ambulatorio' });
    this.resource('habitaciones');
    this.resource('alimentacion');
    this.resource('pacientes');
    this.resource('paciente', {path:'/Paciente/:id'});
    this.resource('medicos');
    this.resource('usuarios');
    this.resource('unauthorized');
});