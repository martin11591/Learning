var renderer = (function() {
    var container = null;

    var isContainerCorrect = function() {
        return container != null;
    }
    var setContainer = function(element) {
        container = element;
    }
    var render = function(data) {
        if (isContainerCorrect()) {
            container.innerHTML = data;
        }
        return this;
    }

    return {
        setContainer: setContainer,
        render: render
    }
})();
