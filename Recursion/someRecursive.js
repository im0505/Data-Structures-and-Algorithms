/**
 * Write a recursive function called someRecursive wihch accepts an
 * array and a callback. The function returns true if a single value
 * in the array returns true when passed to the callback. Otherwise
 * it returns false.
 */
function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[arr.length - 1])) {
    return true;
  }
  arr.pop();
  return someRecursive(arr, callback);
}

function isOdd(num) {
  if (num % 2 !== 0) return true;
  else return false;
}

console.log(someRecursive([2, 3, 6, 8], isOdd));
