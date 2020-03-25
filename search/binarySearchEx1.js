/**
 * Write a function called binarySearch which accepts a sorted array and a value and returns
 * the index at which the value exists. Otherwise, return -1.
 *
 * This algorithm should be more efficient than linearSearch
 */

function binarySearch(sArr, v) {
  let lp = 0,
    rp = sArr.length - 1;
  let p = Math.floor((rp + lp) / 2);
  while (lp <= rp && sArr[p] !== v) {
    console.log("hello");
    if (sArr[p] > v) {
      rp = p - 1;
    } else {
      lp = p + 1;
    }
    p = Math.floor((rp + lp) / 2);
  }
  if (sArr[p] === v) return p;
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
