App.ConfirmmodalController = App.ModalBaseController.extend({
    needs: ['pacientes', 'medicos', 'habitaciones', 'usuarios', 'pacientemodal', 'camamodal'],
    modalsize: 's',
    actions: {
        confirm: function (view) {
            if (this.get('targetComponent')) {
                this.get('targetComponent').send(this.get('sendAction'), this.get('actionParam'), view)
            } else {
                if (this.get('sendActionClose')) {
                    this.get('controllers.' + this.get('controllerOrigin')).send(this.get('sendActionClose'), this.get('viewOrigin'));
                }
                this.get('controllers.' + this.get('controllerName')).send(this.get('sendAction'), this.get('actionParam'), view, this.get('actionParam2'));
            }
        }
    }
});

App.ConfirmmodalView = App.ModalBaseView.extend({
    templateName: 'bcommon/confirmmodal',
})