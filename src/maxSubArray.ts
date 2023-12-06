/**
 * 最大子序和
 */

function maxSubArray(arr: number[]) {
  const dp = new Array();
  dp[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
  }
  return dp[arr.length - 1];
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));

export default maxSubArray;
