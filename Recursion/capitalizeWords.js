/** Write a recursive function called capitalizedWords. Given an array of words,
 * return a new array containing each word capitalized.
 */

function capitalized(arr) {
  if (arr.length === 1) return [arr[0].toUpperCase()];
  let res = capitalized(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
}

console.log(capitalized(["hello", "milk", "cow", "fire"]));
