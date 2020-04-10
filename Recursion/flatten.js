/**
 * Write a recursive function called flatten which accepts an array
 * of arrays and returns a new a array with all values flattened.
 */

function flatten(arr) {
  let newArr = [];
  //   for (let v of arr) {
  //     newArr.concat(v);
  //   }
  newArr.concat(arr[0]);
  console.log(newArr);
}

flatten([1, 2, 3, [4, 5]]);
