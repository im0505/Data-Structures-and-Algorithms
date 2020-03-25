/** Write a function called stringifyNumbers which takes in an object and finds all of
 * the values which ar numbers and converts them to strings.Recursion would be great way
 * to solve this!
 */

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

function stringifyNumbers(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object") {
      stringifyNumbers(obj[key]);
    }
  }
}
console.log(obj);
stringifyNumbers(obj);
console.log(obj);
