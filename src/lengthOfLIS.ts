/**
 * 最长递增子序列
 */

export function lengthOfLIS(arr: number[]) {
  if (!arr.length) {
    return [];
  }
  const res = new Array(arr.length);
  let len = 0;
  res[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > res[len]) {
      res[len + 1] = arr[i];
      len++;
    } else {
      // 二分查找替换掉res中比当前值大的值当中的最小值，本质是让递增序列的上升趋势尽可能慢，从而尽可能的长
      let start = 0;
      let end = len;
      while (start < end) {
        const mid = start + Math.floor((end - start) / 2);
        if (arr[i] < res[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
      res[start] = arr[i];
    }
  }
  return res;
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
