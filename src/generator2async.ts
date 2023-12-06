/**
 * 利用generator实现async
 */

function generator2async(generator: Generator<any, any, any>) {
  return new Promise((resolve, reject) => {
    if (typeof generator !== 'function') {
      reject(new Error('generator不是有效的生成器'));
      return;
    }
    let g = (generator as any)();
    if (!g || typeof g.next !== 'function') {
      reject(new Error('generator不是有效的生成器'));
      return;
    }
    function handle(value?: any) {
      try {
        const res = g.next(value);
        if (!res.done) {
          handle(res.value);
        } else {
          resolve(res.value);
        }
      } catch (e) {
        reject(e);
      }
    }
    handle();
  });
}

export default generator2async;
