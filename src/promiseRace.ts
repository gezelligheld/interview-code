/**
 * Promise.race
 */

function myRace(promise: any[]) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promise.length; i++) {
      if (promise[i] instanceof Promise) {
        promise[i].then(resolve, reject);
      } else {
        resolve(promise[i]);
      }
    }
  });
}

export default myRace;
