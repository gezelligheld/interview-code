/**
 * Promise.all
 */

function myAll(promises: any[]) {
  return new Promise((resolve, reject) => {
    let n = 0;
    const res = new Array(promises.length);
    for (let i = 0; i < promises.length; i++) {
      if (promises[i] instanceof Promise) {
        promises[i]
          .then((data: any) => {
            res[i] = data;
            n++;
            if (n === promises.length) {
              resolve(res);
            }
          })
          .catch((e: any) => {
            reject(e);
          });
      } else {
        res[i] = promises[i];
        n++;
        if (n === promises.length) {
          resolve(res);
        }
      }
    }
  });
}

export default myAll;
