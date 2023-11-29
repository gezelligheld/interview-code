/**
 * 防抖
 */
function debounce(fn: (...args: any[]) => void, wait?: number) {
  let timer: number | null = null;
  return (...args: any[]) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn(...args);
    }, wait || 0);
  };
}

const fn = (x: number) => {
  console.log(x, '----');
  return x;
};

console.log(debounce(fn, 1000)(1));

export default debounce;
