/**
 * 二叉树最大深度
 */

export function getMaxTreeDepth(tree?: Tree): number {
  if (!tree) {
    return 0;
  }
  return Math.max(getMaxTreeDepth(tree.left), getMaxTreeDepth(tree.right)) + 1;
}

export function getMaxTreeDepth1(tree?: Tree): number {
  if (!tree) {
    return 0;
  }
  const queue = [tree];
  let res = 0;
  while (queue.length) {
    let len = queue.length;
    while (len) {
      const node = queue.shift();
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
      len--;
    }
    res++;
  }
  return res;
}

/**
 * 二叉树最小深度
 */

export function getMinTreeDepth(tree?: Tree): number {
  if (!tree) {
    return 0;
  }
  if (!tree.left) {
    return getMinTreeDepth(tree.right) + 1;
  }
  if (!tree.right) {
    return getMinTreeDepth(tree.left) + 1;
  }
  return Math.min(getMinTreeDepth(tree.left), getMinTreeDepth(tree.right)) + 1;
}

export function getMinTreeDepth1(tree?: Tree): number {
  if (!tree) {
    return 0;
  }
  const queue = [tree];
  let res = 0;
  while (queue.length) {
    let len = queue.length;
    while (len) {
      const node = queue.shift();
      if (!node?.left && !node?.right) {
        return res;
      }
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
      len--;
    }
    res++;
  }
  return res;
}
