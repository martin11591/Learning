function myObject() {
    var handler = null,
        pos = {x: 0, y: 0},
        rot = {x: 0, y: 0, z: 0},
        posObj = function(obj) {
            try {
                var x = obj.x;
            } catch(err) {
                var x = 0;
            }
            if (isNaN(x)) x = 0;
            try {
                var y = obj.y;
            } catch(err) {
                var y = 0;
            }
            if (isNaN(y)) y = 0;

            return {
                x: x,
                y: y
            };
        },
        rotObj = function(obj) {
            try {
                var x = obj.x;
            } catch(err) {
                var x = 0;
            }
            if (isNaN(x)) x = 0;
            try {
                var y = obj.y;
            } catch(err) {
                var y = 0;
            }
            if (isNaN(y)) y = 0;
            try {
                var z = obj.z;
            } catch(err) {
                var z = 0;
            }
            if (isNaN(z)) z = 0;

            return {
                x: x,
                y: y,
                z: z
            };
        },
        create = function() {
            handler = document.createElement('div');
            handler.style.position = 'absolute';
            handler.style.backfaceVisibility = 'visible';
            handler.style.transformStyle = 'preserve-3d';
            handler.style.background = 'red';
            handler.style.height = '100px';
            handler.style.width = '100px';
            document.body.appendChild(handler);
            return this;
        },
        moveBy = function(obj) {
            obj = posObj(obj);
            pos.x += obj.x;
            pos.y += obj.y;
            return this;
        },
        moveTo = function(obj) {
            obj = posObj(obj);
            pos.x = obj.x;
            pos.y = obj.y;
            return this;
        },
        rotateBy = function(obj) {
            obj = rotObj(obj);
            rot.x += obj.x;
            rot.y += obj.y;
            rot.z += obj.z;
            return this;
        },
        rotateTo = function(obj) {
            obj = rotObj(obj);
            rot.x = obj.x;
            rot.y = obj.y;
            rot.z = obj.z;
            return this;
        },
        position = function() {
            return pos;
        },
        rotation = function() {
            return rot;
        },
        getElement = function() {
            return handler;
        },
        render = function() {
            handler.style.left = pos.x + 'px';
            handler.style.top = pos.y + 'px';
            handler.style.transform = 'rotateX(' + rot.x + 'deg) rotateY(' + rot.y + 'deg) rotateZ(' + rot.z + 'deg)';
        }

    create();

    return {
        position: position,
        moveBy: moveBy,
        moveTo: moveTo,
        rotation: rotation,
        rotateBy: rotateBy,
        rotateTo: rotateTo,
        getElement: getElement,
        render: render
    };
}
