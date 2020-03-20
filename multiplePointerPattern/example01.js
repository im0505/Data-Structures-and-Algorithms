/**
 * Implement a function called countUniqueValues, which accepts
 * a sorted array, and counts the unique values in the array. There
 * can be negative numbers in the array, but it will always be
 * sorted
 *
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */

// const countUniqueValues = sortedArray => {
//   if (sortedArray.length === 0) return 0;
//   if (sortedArray.length === 1) return 1;

//   let arr = [];
//   let top = sortedArray[0];
//   arr.push(top);
//   for (let i = 1; i < sortedArray.length; i++) {
//     if (top !== sortedArray[i]) {
//       top = sortedArray[i];
//       arr.push(top);
//     }
//   }
//   return arr.length;
// };
const countValues = arr => {
  if (arr.length < 2) return arr.length;
  let now = arr[0];
  let cnt = 1;
  for (let i = 1; i < arr.length; i++) {
    if (now !== arr[i]) {
      now = arr[i];
      cnt++;
    }
  }
  return cnt;
};
console.log(countValues([-2, -1, -1, 0, 1]));
