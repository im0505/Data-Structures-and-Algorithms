/**
 *      Write a function called same, which accepts two arrays.
 *  The function should return true if every value in the array has
 *  it's corresponding value squared in the second array.
 *  The frequency of values must be the same.
 *
 * same([1,2,3], [4,1,9])  //true
 * same([1,2,3], [1,9])   //false
 * same([1,2,1],[4,4,1])  //false
 *
 */

//first solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const obj1 = {},
    obj2 = {},
    obj3 = {};
  for (let v of arr1) {
    if (obj1[v]) {
      obj1[v]++;
    } else {
      obj1[v] = 1;
    }
  }
  for (let v of arr2) {
    if (obj2[v]) {
      obj2[v]++;
    } else {
      obj2[v] = 1;
      obj3[v] = 0;
    }
  }
  for (let key of arr1) {
    let squared = key ** 2;
    if (obj2[squared]) {
      obj3[squared]++;
    } else {
      return false;
    }
  }
  for (let val of arr2) {
    if (obj2[val] !== obj3[val]) {
      return false;
    }
  }
  return true;
}

//refactoring
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let o1 = {},
    o2 = {};

  for (let v of arr1) {
    o1[v] = (o1[v] || 0) + 1;
  }
  for (let v of arr2) {
    o2[v] = (o2[v] || 0) + 1;
  }
  for (let key in o1) {
    if (!(key ** 2 in o2)) {
      return false;
    }
    if (o2[key ** 2] !== o1[key]) {
      return false;
    }
  }
  return true;
}

console.log(
  same2([1, 1, 1, 3, 4, 16, 16, 16], [256, 9, 1, 256, 256, 1, 1, 16])
);

//time complexity O(N);
