/**
 * Implement a function called, areThereDuplicates which accepts a
 * variable number of arguments, and checks whether there are any
 * duplicates among the arguments passed in.
 *
 * Restrictions:
 * Time - O(n)
 * Space - O(n)
 */

function areThereDuplicates(...args) {
  let obj = {};
  for (let v of args) {
    if (obj[v]) return true;
    else obj[v] = v;
  }
  return false;
}

console.log(areThereDuplicates("a", "b", "c", "b"));
