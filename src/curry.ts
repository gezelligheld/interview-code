/**
 * 柯里化
 */
function curry(fn: (...fnArgs: any[]) => any, length?: number) {
  const realLength = length || fn.length;
  return (...args: any[]) => {
    if (args.length < realLength) {
      return curry(fn, realLength - args.length);
    }
    return fn(...args);
  };
}

const add = (a: number, b: number, c: number) => [a, b, c];
const fn = curry(add);
console.dir(fn(1, 2, 3), { depth: null, color: true });
console.dir(fn(1, 2)(3), { depth: null, color: true });

export default curry;
