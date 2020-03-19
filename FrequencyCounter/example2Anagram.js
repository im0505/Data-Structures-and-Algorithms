function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let obj1 = {},
    obj2 = {};
  for (let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for (let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }
  for (let key in obj1) {
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("heflo", "olleh"));
