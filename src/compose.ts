/**
 * 组合
 */
function compose(...fns: ((...args: any[]) => any)[]) {
  if (!fns.length) {
    return;
  }
  return fns.reduce(
    (pre, cur) =>
      (...args) =>
        pre(cur(args))
  );
}

const add = (n: number) => n + 1;
const mul = (n: number) => n * 3;
console.dir(compose(add, mul)?.(1), { depth: null, colors: true });

export default compose;
