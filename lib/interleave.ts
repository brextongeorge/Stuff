// Interleave two arrays by approximate ratio
export function interleaveByRatio<T, U>(a: T[], b: U[], ratio = 0.5): (T | U)[] {
  const result: (T | U)[] = [];
  let i = 0;
  let j = 0;
  while (i < a.length || j < b.length) {
    const aNeeded = (result.length === 0) || (i / (i + j) < ratio);
    if ((aNeeded && i < a.length) || j >= b.length) {
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }
  return result;
}
