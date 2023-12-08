/**
 * 二叉树遍历
 */

interface Tree {
  val: number;
  left?: Tree;
  right?: Tree;
}

/**
 * 前序遍历
 */

export const preorderTraversal = (root: Tree) => {
  const res: number[] = [];
  const handle = (root?: Tree) => {
    if (!root) {
      return;
    }
    res.push(root.val);
    handle(root.left);
    handle(root.right);
  };
  handle(root);
  return res;
};

export const preorderTraversal1 = (root: Tree) => {
  const stack: Tree[] = [];
  const res = [];
  let cur: Tree | undefined = root;
  while (stack.length || cur) {
    while (cur) {
      res.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur?.right;
  }
  return res;
};

/**
 * 中序遍历
 */

export const inorderTraversal = (root: Tree) => {
  const res: number[] = [];
  const handle = (root?: Tree) => {
    if (!root) {
      return;
    }
    handle(root.left);
    res.push(root.val);
    handle(root.right);
  };
  handle(root);
  return res;
};

export const inorderTraversal1 = (root: Tree) => {
  const stack: Tree[] = [];
  const res = [];
  let cur: Tree | undefined = root;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    cur?.val !== undefined && res.push(cur.val);
    cur = cur?.right;
  }
  return res;
};

/**
 * 后序遍历
 */

export const postorderTraversal = (root: Tree) => {
  const res: number[] = [];
  const handle = (root?: Tree) => {
    if (!root) {
      return;
    }
    handle(root.left);
    handle(root.right);
    res.push(root.val);
  };
  handle(root);
  return res;
};

export const postorderTraversal1 = (root: Tree) => {
  const stack: Tree[] = [];
  const res = [];
  let cur: Tree | undefined = root;
  let flag: Tree | undefined;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack[stack.length - 1];
    if (cur?.right && cur.right !== flag) {
      cur = cur.right;
    } else {
      stack.pop();
      res.push(cur?.val);
      flag = cur;
      cur = cur.right;
    }
  }
  return res;
};

/**
 * 层序遍历
 */
export const levelorder = (root: Tree) => {
  if (!root) {
    return;
  }
  const queue = [root];
  const res: number[][] = [];
  while (queue.length) {
    let len = queue.length;
    res.push([]);
    while (len) {
      const node = queue.shift();
      res[res.length - 1].push(node!.val);
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
      len--;
    }
  }
  return res;
};
