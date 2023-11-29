/**
 * 节流
 */
function throttle(fn: (...args: any[]) => void, wait?: number) {
  let timer: number | null = null;
  return (...args: any[]) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      timer && clearInterval(timer);
      timer = null;
      fn(...args);
    }, wait);
  };
}

const fn = (x: number) => {
  console.log(x, '----');
  return x;
};
console.log(throttle(fn)(1));

export default throttle;
