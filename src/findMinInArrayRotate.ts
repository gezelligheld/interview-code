/**
 * 寻找旋转排序数组中的最小值
 */

function findMinInRotateArray(arr: number[]) {
  if (!arr.length) {
    return null;
  }
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] < arr[arr.length - 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return arr[start];
}

const arr = [5, 6, 7, 1, 2, 3, 4];

console.log(findMinInRotateArray(arr));

export default findMinInRotateArray;
