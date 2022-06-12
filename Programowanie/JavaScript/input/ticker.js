function ticker(callback, interval, context = null, args = []) {
    var now = performance.now(),
        expected = now + interval,
        working = false,
        paused = false,
        lastTick = now,
        raf = false,
        startTimestamp = stopTimestamp = false,

        start = function() {
            working = true;
            startTimestamp = stopTimestamp = performance.now();
            raf = window.requestAnimationFrame(step);
            return this;
        },
        isWorking = function() {
            return working;
        },
        pause = function(state) {
            if (isWorking()) {
                if (typeof(state) == 'undefined') state = !paused;
                else state = !!state;
                paused = state;
            }
            return this;
        },
        isPaused = function() {
            return paused;
        },
        step = function(newTime) {
            raf = window.requestAnimationFrame(step);
            if (!isPaused() && isWorking() && newTime >= expected) {
                lastTick = newTime;
                var drift = newTime - expected;
                if (drift > interval) expected = newTime;
                expected = expected + interval - Math.min(0, drift);
                callback.apply(context, args);
            }
            return this;
        },
        stop = function() {
            working = false;
            window.cancelAnimationFrame(raf);
            return this;
        },
        getInterval = function() {
            return interval;
        },
        setInterval = function(amount = 0) {
            interval = amount;
            return this;
        },
        elapsed = function() {
            if (!startTimestamp || !stopTimestamp) return 0;
            return stopTimestamp - startTimestamp;
        },
        getLastTick = function() {
            return lastTick;
        };

    return {
        start: start,
        isWorking: isWorking,
        pause: pause,
        isPaused: isPaused,
        stop: stop,
        getInterval: getInterval,
        setInterval: setInterval,
        elapsed: elapsed,
        getLastTick: getLastTick
    };
}
