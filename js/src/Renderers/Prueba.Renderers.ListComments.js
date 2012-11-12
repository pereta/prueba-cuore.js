Prueba.Renderers.ListComments = CUORE.Class(CUORE.Renderer, {

    paint: function (component) {
        Prueba.Renderers.ListComments.parent.paint.call(this, component);
        this.$panel = $(this.panel);
    },

    updateWhenDrawn: function (component) {
        this.$panel.empty();
        var i;
        var len = component.size();
        for (i = 0; i < len; i++) {
            this._addComment(component.item(i));
        }
    },

    _addComment: function (comment) {
        var $comment = $('<div />').addClass('comment');
        
        $comment.append(this._createDate(comment.date));
        $comment.append(this._createTextComment(comment.text));

        this.$panel.append($comment);
    },

    _createDate: function (date) {
        var $date = $('<span />').addClass('date');
        $date.append(this._getFormatedDate(date));

        return $date;
    },

     _getFormatedDate: function (date) {
        var momentDate = moment(date);
        return momentDate.calendar();
    },

    _createTextComment: function (text) {
        var $text = $('<span />').addClass('commentText');
        $text.append(text);

        return $text;
    }

});

