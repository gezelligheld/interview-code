/**
 * 数组乱序
 */
function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    let temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;
  }
  return array;
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.dir(shuffle(array), { depth: true, color: true });

export default shuffle;
