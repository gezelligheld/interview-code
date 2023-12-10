/**
 * 无重复字符的最长子串
 */

export function lengthOfLongestSubstring(str: string) {
  let left = 0;
  let res = 0;
  const set = new Set();
  // 滑动窗口
  while (left < str.length) {
    if (set.size) {
      set.delete(str[left - 1]);
    }
    let right = left;
    while (right < str.length && !set.has(str[right])) {
      set.add(str[right]);
      right++;
    }
    res = Math.max(res, set.size);
    left++;
  }
  return res;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
