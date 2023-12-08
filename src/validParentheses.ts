/**
 * 有效的括号
 */

export function isValidParentheses(str: string) {
  if (!str.length) {
    return false;
  }
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  let left = 0;
  const stack = [];
  while (left < str.length) {
    if (map.has(str[left])) {
      if (stack[stack.length - 1] !== map.get(str[left])) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(str[left]);
    }
    left++;
  }
  return !stack.length;
}

console.log(isValidParentheses('(())[)'));
console.log(isValidParentheses('(())[()'));
