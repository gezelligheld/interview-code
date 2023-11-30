/**
 * promise并发限制
 */

const urls = [
  { info: '1', time: 3000 },
  { info: '2', time: 2000 },
  { info: '3', time: 3400 },
  { info: '4', time: 1300 },
  { info: '5', time: 5600 },
  { info: '6', time: 3800 },
  { info: '7', time: 1100 },
  { info: '8', time: 2900 },
  { info: '9', time: 5500 },
  { info: '10', time: 6600 },
  { info: '11', time: 7400 },
  { info: '12', time: 9800 },
];

function loadImage(url: { info: string; time: number }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${url.info}ok`);
      resolve(null);
    }, url.time);
  });
}

/**
 * 利用Promise.race
 */
function promiseLimit(
  data: any[],
  handle: (...args: any[]) => Promise<any>,
  limit: number
) {
  const promises = data.slice(0, limit).map((item, index) => {
    return handle(item).then(() => index);
  });
  let fn = Promise.race(promises);
  for (let i = limit; i < data.length; i++) {
    fn = fn.then((index) => {
      promises[index] = handle(data[i]).then(() => index);
      return Promise.race(promises);
    });
  }
}

// promiseLimit(urls, loadImage, 3);

function promiseLimit2(list: Promise<any>[], limit: number) {
  function handle(list: Promise<any>[], limit: number) {
    if (!list.length) {
      return;
    }
    const num = Math.min(list.length, limit);
    if (num === 0) {
      return;
    }
    for (let i = 0; i < num; i++) {
      const fn = list.shift();
      // 容量limit，执行一个后空间减1
      limit--;
      fn?.then(() => {
        limit++;
        // 容量limit，执行完一个后空间加1
        handle(list, limit);
      });
    }
  }
  handle(list, limit);
}

promiseLimit2(
  urls.map((u) => loadImage(u)),
  3
);

export { promiseLimit, promiseLimit2 };
