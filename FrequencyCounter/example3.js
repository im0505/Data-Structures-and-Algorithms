/**
 * Write a function called sameFrequency. Given two positive integers,
 * find out if the two numbers have the same frequency of digits
 * solution must have the O(N) time complexity
 */

function sameFrequency(arr1, arr2) {
  arr1 = arr1.toString();
  arr2 = arr2.toString();
  if (arr1.length !== arr2.length) return false;

  let obj1 = {},
    obj2 = {};
  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = obj1[arr1[i]] + 1 || 1;
    obj2[arr2[i]] = obj2[arr2[i]] + 1 || 1;
  }
  for (let key in obj1) {
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(3589578, 5879385));
