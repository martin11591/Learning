var keyboard = (function() {
    var pressed = [];
    var history = [];
    var maxHistory = 10;

    var truncateHistory = function() {
        history = history.slice(-maxHistory);
        return this;
    }
    var getKey = function(event) {
        var key = event.code;
        if (key.substring(0, 3) == 'Key') key = key.substring(3);
        return key;
    }
    var addToHistory = function(event) {
        history.push(getKey(event));
        truncateHistory();
        return this;
    }
    var isRealEvent = function(event) {
        if (event instanceof KeyboardEvent) return true;
        return false;
    }
    var keyDownEvent = function(event) {
        if (!isRealEvent(event)) return this;
        if (isPressed(getKey(event)) === false) addToHistory(event);
        pressed[getKey(event)] = {
            timestamp: performance.now()
        };
        return this;
    }
    var keyUpEvent = function(event) {
        if (!isRealEvent(event)) return this;
        pressed[getKey(event)] = false;
        return this;
    }
    var isPressed = function(key) {
        key = getKey({code: key});
        return typeof(pressed[key]) == 'undefined' ? false : pressed[key];
    }
    var getPressed = function() {
        return pressed;
    }
    var setMaxHistory = function(amount) {
        maxHistory = parseInt(amount);
        return this;
    }
    var getHistory = function() {
        return history;
    }

    return {
        keyDownEvent: keyDownEvent,
        keyUpEvent: keyUpEvent,
        isPressed: isPressed,
        getPressed: getPressed,
        setMaxHistory: setMaxHistory,
        getHistory: getHistory
    }
})();

var mouse = (function() {
    var pressed = [];
    var history = [];
    var maxHistory = 10;

    var truncateHistory = function() {
        history = history.slice(-maxHistory);
        return this;
    }
    var getButton = function(event) {
        return 'button-' + event.button;
    }
    var addToHistory = function(event) {
        history.push(getButton(event));
        truncateHistory();
        return this;
    }
    var isRealEvent = function(event) {
        if (event instanceof MouseEvent) return true;
        return false;
    }
    function mouseButtonDownEvent(event) {
        if (!isRealEvent(event)) return this;
        if (isPressed(getButton(event)) === false) addToHistory(event);
        pressed[getButton(event)] = true;
        return this;
    }
    function mouseButtonUpEvent(event) {
        if (!isRealEvent(event)) return this;
        pressed[getButton(event)] = false;
        return this;
    }
    function isPressed(key) {
        return typeof(pressed[key]) == 'undefined' ? false : pressed[key];
    }
    function getPressed() {
        return pressed;
    }
    var setMaxHistory = function(amount) {
        maxHistory = parseInt(amount);
        return this;
    }
    var getHistory = function() {
        return history;
    }

    return {
        mouseButtonDownEvent: mouseButtonDownEvent,
        mouseButtonUpEvent: mouseButtonUpEvent,
        isPressed: isPressed,
        getPressed: getPressed,
        setMaxHistory: setMaxHistory,
        getHistory: getHistory
    }
})();