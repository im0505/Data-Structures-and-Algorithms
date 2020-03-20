function isSubsequence(str1, str2) {
  let left = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1[left] === str2[i]) left++;
    if (left === str1.length) return true;
  }
  return false;
}

console.log(
  isSubsequence("hello", "hello worlde"),
  isSubsequence("sing", "string"),
  isSubsequence("abc", "acb")
);
