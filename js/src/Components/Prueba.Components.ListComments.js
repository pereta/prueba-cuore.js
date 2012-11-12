Prueba.Components.ListComments = CUORE.Class(CUORE.Components.List, {

    init: function () {
        Prueba.Components.ListComments.parent.init.call(this);
        this.renderer = new Prueba.Renderers.ListComments();
        
        this.addHandler('PRUEBA_addComment_EXECUTED', new Prueba.Handlers.ListComments.CommentAddedHandler());
    }

});

Prueba.Handlers.ListComments = {};

Prueba.Handlers.ListComments.CommentAddedHandler = CUORE.Class(CUORE.Handler, {
    handle: function (message) {
        if(message.text) {
            this.getOwner().list.push({ date: new Date(),
                                        text: message.text });
            this.getOwner().updateRender();
        }
    }
});
