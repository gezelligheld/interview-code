/**
 * 最长公共前缀
 */

export function longestCommonPrefix(str: string[]) {
  if (!str.length) {
    return '';
  }
  // 纵向扫描
  for (let i = 0; i < str[0].length; i++) {
    const cur = str[0][i];
    for (let j = i; j < str.length; j++) {
      if (cur !== str[j][i]) {
        return str[0].substring(0, j);
      }
    }
  }
  return str[0];
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
