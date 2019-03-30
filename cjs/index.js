"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.next = exports.set = exports.get = exports.reset = exports.restore = void 0;
//counter unnamed
var __counter = 0; //named counter object key: counter

var __counters = {};

var restore = function restore(key) {
  if (typeof key === 'undefined') {
    __counter = 0;
  } else {
    __counters[key] = 0;
  }
};

exports.restore = restore;

var reset = function reset() {
  __counter = 0;
  __counters = {};
};

exports.reset = reset;

var get = function get(key) {
  if (typeof key === 'undefined') {
    return __counter;
  } else if (typeof __counters[key] === 'undefined') {
    return 0;
  } else {
    return __counters[key];
  }
};

exports.get = get;

var set = function set(value, key) {
  if (typeof key === 'undefined') {
    __counter = value;
  } else {
    __counters[key] = value;
  }
};

exports.set = set;

var next = function next(key) {
  if (typeof key === 'undefined') {
    return ++__counter;
  } else if (typeof __counters[key] === 'undefined') {
    set(1, key);
    return 1;
  } else {
    return ++__counters[key];
  }
};

exports.next = next;
var _default = get;
exports.default = _default;