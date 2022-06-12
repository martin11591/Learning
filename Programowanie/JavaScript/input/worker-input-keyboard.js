var keyboard = (function() {
    var pressed = [];

    var keyDown = function(keyCode) {
        pressed[keyCode] = true;
    }
    var keyUp = function(keyCode) {
        pressed[keyCode] = false;
    }
    var isPressed = function(keyCode) {
        return typeof(pressed[keyCode]) == 'undefined' ? false : pressed[keyCode];
    }
    var getPressed = function() {
        return pressed;
    }

    return {
        keyDown: keyDown,
        keyUp: keyUp,
        isPressed: isPressed,
        getPressed: getPressed
    }
})();

onmessage = function(e) {
    switch (e.data.eventType) {
        case 'keydown':
            keyboard.keyDown(e.data.eventCode);
            break;
        case 'keyup':
            keyboard.keyUp(e.data.eventCode);
            break;
        case 'getpressed':
            console.log(keyboard.getPressed());
            break;
    }
}
