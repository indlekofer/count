//counter unnamed
var __counter = 0;
//named counter object key: counter
var __counters = {};

export const restore = (key) => {
  if (typeof key === 'undefined') {
    __counter = 0;
  } else {
    __counters[key] = 0;
  }
}

export const reset = () => {
  __counter = 0;
  __counters = {};
}

export const get = (key) => {
  if (typeof key === 'undefined') {
    return __counter;
  } else if (typeof __counters[key] === 'undefined') {
    return 0;
  } else {
    return __counters[key];
  }
}

export const set = (value, key) => {
  if (typeof key === 'undefined') {
    __counter = value;
  } else {
    __counters[key] = value;
  }
}

export const next = (key) => {
  if (typeof key === 'undefined') {
    return ++__counter;
  } else if (typeof __counters[key] === 'undefined') {
    set(1, key);
    return 1;
  } else {
    return ++__counters[key];
  }
}

export default get;
