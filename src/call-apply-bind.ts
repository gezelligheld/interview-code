/**
 * call
 */
Function.prototype.call = function (obj, ...args) {
  obj = obj || window;
  obj.fn = this;
  const res = args.length ? obj.fn(...args) : obj.fn();
  delete obj.fn;
  return res;
};

/**
 * apply
 */
Function.prototype.apply = function (obj, args) {
  obj = obj || window;
  obj.fn = this;
  const res = args.length ? obj.fn(...args) : obj.fn();
  delete obj.fn;
  return res;
};

/**
 * bind
 */
Function.prototype.bind = function (obj) {
  obj = obj || window;
  obj.fn = this;
  return function (...args: any[]) {
    const res = args.length ? obj.fn(...args) : obj.fn();
    delete obj.fn;
    return res;
  };
};

export {};
