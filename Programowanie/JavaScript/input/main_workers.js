var workers = {
    keyboard: new Worker('worker-input-keyboard.js')
};

document.onkeydown = document.onkeyup = function(event) {
    workers.keyboard.postMessage({eventType: event.type, eventCode: event.code});
}
workers.keyboard.postMessage('getpressed');