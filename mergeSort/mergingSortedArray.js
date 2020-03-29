/** write a function which accepts two sorted array and returns an merged array in order */

function merge(arr1, arr2) {
  let newArr = [];
  let f1 = true,
    f2 = true;
  let p1 = 0,
    p2 = 0;
  while (f1 || f2) {
    if (p1 >= arr1.length) {
      f1 = false;
      break;
    }
    if (p2 >= arr2.length) {
      f2 = false;
      break;
    }
    if (arr1[p1] <= arr2[p2]) {
      newArr.push(arr1[p1]);
      p1++;
    } else if (arr1[p1] >= arr2[p2]) {
      newArr.push(arr2[p2]);
      p2++;
    }
  }
  if (f1) {
    while (p1 < arr1.length) {
      newArr.push(arr1[p1]);
      p1++;
    }
  } else if (f2) {
    while (p2 < arr2.length) {
      newArr.push(arr2[p2]);
      p2++;
    }
  }
  return newArr;
}

// console.log(merge([1, 4, 7, 8, 23], [2, 6, 7, 9, 10, 13, 19]));
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
