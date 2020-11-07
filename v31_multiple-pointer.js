{
  /*
  Implement a function called 
  countUniqueValues, 
  which accepts a sorted array, and counts the unique values in the array. 
  There can be negative
  numbers in the array, but it will always be sorted.*/
}

function countUniqueValues(arr) {
  let pos = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[pos] !== arr[j]) {
      pos++;
      arr[pos] = arr[j];
    }
  }
  return pos ? pos + 1 : pos;
}

console.log(countUniqueValues([1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 2, 4, 5, 6, 6, 7])); // 6
console.log(countUniqueValues([1, 2, 2, 4, 5, 6, 6, 7, 7])); // 6
console.log(countUniqueValues([1, 2, 2, 4, 5, 6, 6, 6, 7, 7, 7])); // 6
