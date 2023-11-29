/**
 * 数组方法
 */

/**
 * reduce
 */
Array.prototype.reduce = function (
  fn: (
    previousValue: any,
    currentValue: any,
    currentIndex: number,
    array: any[]
  ) => any,
  initialValue?: any
) {
  let initialVal = initialValue || this[0];
  for (let i = 0; i < this.length; i++) {
    initialVal = fn(initialVal, this[i], i, this);
  }
  return initialVal;
};

/**
 * slice
 */
Array.prototype.slice = function (start, end) {
  const startIndex = start || 0;
  const endIndex = end || this.length;
  const res = [];
  for (let i = startIndex; i < endIndex; i++) {
    res.push(this[i]);
  }
  return res;
};
