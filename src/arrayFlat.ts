/**
 * 数组扁平化
 */
function arrayFlat<T>(array: T[]): any {
  const res: T[] = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      res.push(...arrayFlat(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

/**
 * 数组扁平化，指定扁平几层
 */
function arrayFlatDepth<T>(arr: T[], depth = 1): any {
  if (!arr.length) {
    return [];
  }
  if (depth === 0) {
    return arr;
  }
  return arr.reduce((res, item) => {
    if (Array.isArray(item)) {
      return depth === 1
        ? [...res, arrayFlatDepth(item, depth - 1)]
        : [...res, ...arrayFlatDepth(item, depth - 1)];
    }
    return [...res, item];
  }, [] as T[]);
}

const array = [1, 2, [3, 4, [5, 6]]];
console.dir(arrayFlat(array), { depth: null, colors: true });
console.dir(arrayFlatDepth(array, 2), { depth: null, colors: true });

export { arrayFlat, arrayFlatDepth };
