/**
 * Given an array of integers and a number, write a function called
 * maxSubarraySum, which finds the maximum sum of a subarray with
 * the length of the number passed to the function.
 *
 * Note that a subarray must consist of consecutive elements from
 * the original array. In the first example below, [100, 200, 300]
 * is a subarray of the original array, but [100, 300] is not.
 *
 */

function maxSubarraySum(arr, len) {
  let max = 0;
  for (let i = 0; i < len; i++) {
    max += arr[i];
  }
  let sum = max;
  let index = 0;
  for (let i = len; i < arr.length; i++) {
    sum -= arr[index];
    sum += arr[i];
    index++;
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2));
