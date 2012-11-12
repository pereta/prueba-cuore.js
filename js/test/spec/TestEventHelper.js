var EVENT = EVENT || {};
EVENT.TEST = {

    click: function(element) {
        element = element.get(0) || element;
        element.dispatchEvent(this.createEvent('click'));
    },

    blur: function(element) {
        element = element.get(0) || element;
        element.dispatchEvent(this.createEvent('blur'));
    },

    change: function(element) {
        element = element.get(0) || element;
        element.dispatchEvent(this.createEvent('change'));
    },

    keypress: function (element, keyCode) {
        element = element.get(0) || element;
        element.dispatchEvent(this.createKeyboardEvent('keypress', keyCode));
    },
    
    createEvent: function(eventName) {
        var clickEvent = document.createEvent("MouseEvents");
        clickEvent.initMouseEvent(eventName, true, true, window, 0, 0, 0, 10, 11, false, false, false, false, 0, null);
        return clickEvent;
    },

    createKeyboardEvent: function (eventName, keyCode) {
        var keyEvent = document.createEvent("KeyBoardEvent");
        keyEvent.initKeyEvent(
            eventName,        //  in DOMString typeArg,
            true,             //  in boolean canBubbleArg,
            true,             //  in boolean cancelableArg,
            null,             //  in nsIDOMAbstractView viewArg,  Specifies UIEvent.view. This value may be null.
            false,            //  in boolean ctrlKeyArg,
            false,            //  in boolean altKeyArg,
            false,            //  in boolean shiftKeyArg,
            false,            //  in boolean metaKeyArg,
            keyCode,               //  in unsigned long keyCodeArg,
            0);              //  in unsigned long charCodeArg);
        return keyEvent;
    }
};