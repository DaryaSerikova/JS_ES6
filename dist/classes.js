'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task() {
    _classCallCheck(this, Task);

    console.log('Создание задачи');
};

var task = new task();

console.log(typeof task === 'undefined' ? 'undefined' : _typeof(task));
console.log(task instanceof Task);