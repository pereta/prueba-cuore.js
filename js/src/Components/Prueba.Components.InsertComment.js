Prueba.Components.InsertComment = CUORE.Class(CUORE.Component, {

    init: function () {
        Prueba.Components.InsertComment.parent.init.call(this);
        this.renderer = new Prueba.Renderers.InsertComment();
        this.placeholderKey = 'prueba.insertComment.placeholder';
        this.maxlengthAlertTextKey = 'prueba.insertComment.maxlength';
        
        this.addHandler('PRUEBA_addComment_EXECUTED', new Prueba.Handlers.InsertComment.AddCommentHandler());
    },

    onEnvironmentUp: function () {
        this.setI18NKey(this.placeholderKey);
        this.setI18NKey(this.maxlengthAlertTextKey);
    },

    getPlaceHolderText: function () {
        return this.getText(this.placeholderKey);
    },

    getMaxlengthAlertText: function () {
        return this.getText(this.maxlengthAlertTextKey);
    },

    sendComment: function (comment) {
        if (comment) {
            var params = {
                text: comment
            };
            
            CUORE.Bus.emit('PRUEBA_addComment_EXECUTED', params);
        }
    },

    _clearInput: function () {
        this.renderer._clearInput();
    }

});

Prueba.Handlers.InsertComment = {};

Prueba.Handlers.InsertComment.AddCommentHandler = CUORE.Class(CUORE.Handler, {
    handle: function (message) {
        if(message.text) {
            this.owner._clearInput();
        }
    }
});
