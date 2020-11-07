// input [1,2,3] [1,4,9] => true
// input [1,5,2,3] [1,4,9] => false
// checks if the other array has all the values.

function frequencyCounter(arr, arrSqr) {
  const counterObj = {};
  arr.forEach(
    (item) => (counterObj[item] = counterObj[item] ? counterObj[item] + 1 : 1),
  );
  for (let i = 0; i < arrSqr.length; i++) {
    const root = Math.sqrt(arrSqr[i]);
    if (!counterObj[root] || counterObj[root] < 0) return false;
    counterObj[root]--;
  }
  for (key in counterObj) {
    if (counterObj[key] > 0) return false;
  }
  return true;
}

console.log(frequencyCounter([1, 2, 3], [1, 4, 9]));
console.log(frequencyCounter([1, 2, 3], [1, 9]));
console.log(frequencyCounter([1, 2, 7, 5], [1, 4, 49]));

console.log(frequencyCounter([1, 2, 3, 5, 2, 3], [1, 9, 4, 25, 9, 4]));

function validAnagram(str1, str2) {
  const str1Arr = str1.split("");
  const obj = {};

  str1Arr.forEach((item) => (obj[item] = obj[item] ? obj[item] + 1 : 1));

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (!obj[letter]) return false;
    obj[letter]--;
    if (obj[letter] < 1) delete obj[letter];
  }

  return !Object.keys(obj).length;
}
