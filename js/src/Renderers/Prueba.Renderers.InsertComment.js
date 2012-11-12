Prueba.Renderers.InsertComment = CUORE.Class(CUORE.Renderer, {

    paint: function (component) {
        Prueba.Renderers.InsertComment.parent.paint.call(this, component);
        this.$panel = $(this.panel);
        
        this.$inputComment = this._createInputComment(component);
        this.$panel.append(this.$inputComment);

        this._submitEvent(component);
        this._applyMaxlength(component);
    },

    _createInputComment: function (component) {
        var $inputComment = $('<input />').addClass('insertComment');
        $inputComment.attr('type', 'text');
        $inputComment.attr('placeholder', component.getPlaceHolderText());

        return $inputComment;
    },

    _submitEvent: function (component) {
        var self = this;
        CUORE.Dom.Event.add(this.$inputComment.get(0), 'keypress', function (event) {
            var isEnter = event.keyCode === 13;
            if(isEnter) {
                component.sendComment(self.$inputComment.val());
            }
        });
    },

    _applyMaxlength: function (component) {
        this.$inputComment.maxlength({
            events: [], // Array of events to be triggerd
            maxCharacters: 20, // Characters limit
            status: true, // True to show status indicator bewlow the element
            statusClass: "", // The class on the status div
            statusText: "", // The status text
            notificationClass: "",  // Will be added when maxlength is reached
            showAlert: true, // True to show a regular alert message
            alertText: component.getMaxlengthAlertText(), // Text in alert message
            slider: true // True Use counter slider
        });
    },

    _clearInput: function () {
        this.$inputComment.val('');
    }

});
