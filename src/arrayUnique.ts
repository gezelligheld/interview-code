/**
 * 数组去重
 */
function arrayUnique<T>(array: T[]) {
  const res: T[] = [];
  array.forEach((item) => {
    if (res.indexOf(item) === -1) {
      res.push(item);
    }
  });
  return res;
}

/**
 * 数组去重，利用map
 */
function arrayUniqueWithMap<T>(array: T[]) {
  const map = new Map<T, number>();
  return array.reduce((res, item) => {
    if (!map.has(item)) {
      map.set(item, 1);
      res.push(item);
    }
    return res;
  }, [] as T[]);
}

const array = [1, 1, 1, 2, 1, 1, 3];
console.dir(arrayUnique(array), { depth: null, colors: true });
console.dir(arrayUniqueWithMap(array), { depth: null, colors: true });

export { arrayUnique, arrayUniqueWithMap };
