/** Write a function called linearSearch which accepts an array and a value, and returns
 * the index at which the value exist. If the value does not exist in the array, return -1.
 *
 * Don't use indexOf to inplement this function
 */

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === value) return i;
  return -1;
}

console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
console.log(linearSearch([100], 100));
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10));
