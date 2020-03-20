/**
 * Write a function called averagePair. Given a sorted array of
 * integers and a target average, determine if there is a pair of
 *  values in the array where the average of the pair equals the
 * target average. There may be more than one pair that matches the
 *  average target.
 */
function averagePair(arr, avg) {
  let sum = avg * 2;
  let i = 0,
    j = arr.length - 1;
  while (j > i) {
    let num = arr[i] + arr[j];
    if (num === sum) return true;
    else if (num > sum) j--;
    else if (num < sum) i++;
  }
  return false;
}
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
