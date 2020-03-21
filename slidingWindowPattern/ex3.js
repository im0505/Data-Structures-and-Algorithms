/**
 * Write a function called findLongestSubstring, which accepts a string and returns
 * the length of the longest substring with all distinct characters
 *
 *  "rithmschool"  // 7
 *  "thisisawesome" //6
 *  "thecatinthehat" //7
 */

function findLongestSubstring(str) {
  let obj = {};
  let now = 0,
    max = -Infinity;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = i;
      now++;
      max = Math.max(max, now);
    } else if (obj[str[i]] === 0 || obj[str[i]]) {
      now = 0;
      i = obj[str[i]];
      obj = {};
    }
  }

  return max === -Infinity ? 0 : max;
}

console.log(findLongestSubstring("thisishowwedoit"));
