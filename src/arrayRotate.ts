/**
 * 旋转数组
 */

function rotate<T>(arr: T[], k: number) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i + k >= arr.length) {
      res[i + k - arr.length] = arr[i];
    } else {
      res[i + k] = arr[i];
    }
  }
  return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(rotate(arr, 3));

export default rotate;
