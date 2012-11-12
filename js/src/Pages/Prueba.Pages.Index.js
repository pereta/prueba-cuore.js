Prueba.Pages.Index = CUORE.Class(CUORE.Page, {

    initializeServices: function () {
        Prueba.Pages.Index.parent.initializeServices.call(this);
        //se inicializarian servicios como por ejemplo
        // this.addService(new Prueba.Services.AService());
    },

    initializeComponents: function () {
        this.addComponent(new Prueba.Components.InsertComment(), 'insertComment', CUORE.Behaviours.HIJACK);
        this.addComponent(new Prueba.Components.ListComments(), 'listComments', CUORE.Behaviours.HIJACK);
    }

});
