var test = (function() {

  "use strict";
  var a = 15;

  var b = 30;

  var tmp = {};
  Object.defineProperty(tmp, "add", {value: function() {return a + b}});
  Object.defineProperty(tmp, "sub", {value: function() {return a - b}});
  Object.defineProperty(tmp, "mul", {value: function() {return a * b}});
  Object.defineProperty(tmp, "div", {value: function() {return a / b}});
  Object.defineProperty(tmp, "mod", {value: function() {return a % b}});
  Object.defineProperty(tmp, "int", {value: function() {return Math.floor(a / b)}});
  Object.defineProperty(tmp, "setA", {value: function(val) {a = val}});
  Object.defineProperty(tmp, "setB", {value: function(val) {b = val}});
  Object.defineProperty(tmp, "set", {value: function(sA, sB) {
    if (sA === undefined) return;
    // When argument is Object
    if (sA instanceof Array === false && typeof(sA) !== "string") {
      if (sA.a !== undefined) a = sA.a;
      if (sA.b !== undefined) b = sA.b;
    } else {
      // When argument is Array
      if (sA instanceof Array === true) {
        if (sA[0] !== undefined) a = sA[0];
        if (sA[1] !== undefined) b = sA[1];
      } else {
        // Argument must be string or number
        if (typeof(sA) === "string") {
          var tmp = sA.split(",");
          a = tmp[0];
          if (tmp[1] !== undefined) b = tmp[1];
        } else {
          if (typeof(sA) === "number") {
            a = sA;
            if (b !== undefined) b = sB;
          }
        }
      }
    }
  }});
  Object.defineProperty(tmp, "getA", {value: function() {return a}});
  Object.defineProperty(tmp, "getB", {value: function() {return b}});
  Object.defineProperty(tmp, "get", {value: function(type) {
    if (type === undefined) type = "";
    if (type.length === 1 && type.toLowerCase() === "a" || type === 0) return a;
    if (type.length === 1 && type.toLowerCase() === "b" || type === 1) return b;
    if (typeof(type) === "string") return a + "," + b;
    if (type instanceof Array === false) return {a: a, b: b};
    if (type instanceof Array === true) return [a, b];
    var tmp = [a,b];
    tmp.a = a;
    tmp.b = b;
    return tmp;
  }});
  return tmp;
})();

/*
Pe³na hermetyzacja

Obiekt test posiada nienadpisywalne metody do sterowania parametrami "a" i "b" obiektu
Parametry "a" i "b" s¹ dostêpne tylko poprzez gettery i settery, wy³¹cznie w anonimowej funkcji
*/