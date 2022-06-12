document.onkeydown = keyboard.keyDownEvent;
document.onkeyup = keyboard.keyUpEvent;
document.onmousedown = mouse.mouseButtonDownEvent;
document.onmouseup = mouse.mouseButtonUpEvent;

renderer.setContainer(document.getElementsByClassName('renderer')[0]);
renderer.render("start");

var start = performance.now();
var fps = [];
var acc = function(acc, a) {
    return acc + a;
}
var renderFps = 30;
var avgProb = 144;

var app = (function() {
    var o = new myObject(),
        v = 0;
        play = function() {
            core.then = performance.now();
            core.frame();
            // core.ticker = new ticker(function() {
            //     v += (v < 0);
            // }, 1000 / 30);
            // core.ticker.start();
        },
        pause = function() {
            window.cancelAnimationFrame(core.raf);
        },
        speed = function(amount = 1) {
            core.speedMod = amount;
        },
        core = {
            speedMod: 1,
            frame: function() {
                core.setDelta();
                core.update();
                // core.render();
                core.raf = window.requestAnimationFrame(core.frame);
            },
            setDelta: function() {
                core.now = performance.now();
                core.delta = (core.now - core.then) / 1000;
                core.then = core.now;
            },
            update: function() {
                if (!!keyboard.isPressed('KeyW') || !!keyboard.isPressed('ArrowUp')) v += 1 * core.delta * core.speedMod * 60;
                else if (!!keyboard.isPressed('KeyS') || !!keyboard.isPressed('ArrowDown')) v -= 1 * core.delta * core.speedMod * 60;
                if (!!keyboard.isPressed('KeyA') || !!keyboard.isPressed('ArrowLeft')) o.rotateBy({z: -1 * core.delta * core.speedMod * 60});
                else if (!!keyboard.isPressed('KeyD') || !!keyboard.isPressed('ArrowRight')) o.rotateBy({z: 1 * core.delta * core.speedMod * 60});
                var x = v * core.delta * core.speedMod;
                o.moveBy({x: x});

            },
            render: function() {
                o.render();
            }
        };

    return {
        play: play,
        pause: pause,
        speed: speed,
        render: core.render
    }
})();

app.play();

var test = function() {
    var tick = performance.now();
    fps.push(Math.round(1000 / (tick - start) * 100) / 100);
    var avg = fps.reduce(acc, 0) / fps.length;
    if (fps.length > avgProb) fps = fps.slice(-avgProb);
    renderer.render(avg + " " + Date.now() + "<br />" + keyboard.getHistory().join(","));

    start = tick;
    app.render();
}

var t = new ticker(test, 1000 / renderFps);
t.start();
// console.log(t);
