const merge = require("./mergingSortedArray");

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
console.log(mergeSort([5, 1, 2, 6, 2, 3, 700, 10, 51, 32, 16, 64, 7, 0, 9]));
