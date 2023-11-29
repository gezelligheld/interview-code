/**
 * 数组转树
 */

interface ArrayItem {
  id: number;
  parentId: number | null;
  name: string;
}

interface TreeNode {
  id: number;
  name: string;
  children: TreeNode[];
}

function formatTreeNode(array: ArrayItem[], parentId: number): TreeNode[] {
  if (!array.length) {
    return [];
  }
  const childs = array.filter((item) => item.parentId === parentId);
  if (!childs.length) {
    return [];
  }
  return childs.map((item) => ({
    id: item.id,
    name: item.name,
    children: formatTreeNode(array, item.id),
  }));
}

function array2tree(array: ArrayItem[]) {
  return array
    .filter(({ parentId }) => parentId === null)
    .map((item) => ({
      id: item.id,
      name: item.name,
      children: formatTreeNode(array, item.id),
    }));
}

const array = [
  { id: 1, parentId: null, name: 'Node 1' },
  { id: 2, parentId: 1, name: 'Node 1.1' },
  { id: 3, parentId: 1, name: 'Node 1.2' },
  { id: 4, parentId: 2, name: 'Node 1.1.1' },
  { id: 5, parentId: null, name: 'Node 2' },
  { id: 6, parentId: 5, name: 'Node 2.1' },
];

console.dir(array2tree(array), { depth: null, colors: true });

export default array2tree;
