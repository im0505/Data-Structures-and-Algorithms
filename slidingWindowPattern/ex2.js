/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of
 * positive integers and positive integer.
 *
 * This function should return the minimal length of a contiguous subarray of which the
 * sum is greater than or equal to the integer passed to the function. If there isn't
 * one, return 0 instead.
 */

// function minSubArrayLen(arr, num) {
//   let len = Infinity;
//   let pointer = 0,
//     sum = 0,
//     nowLen = 0;
//   for (let i in arr) {
//     sum += arr[i];
//     nowLen = i - pointer + 1;
//     if (sum >= num) {
//       while (true) {
//         if (nowLen < len) {
//           len = nowLen;
//         }
//         if (sum - arr[pointer] >= num) {
//           sum -= arr[pointer];
//           pointer++;
//           nowLen--;
//         } else break;
//       }
//     }
//   }
// return len === Infinity ? 0 : len;
// }

//Refactory

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
