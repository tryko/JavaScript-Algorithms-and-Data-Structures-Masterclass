function flatten(arr) {
  const tempArr = [];

  function helper(reducedArr) {
    if (!reducedArr.length) return;
    if (!Array.isArray(reducedArr[reducedArr.length - 1])) {
      tempArr.push(reducedArr[reducedArr.length - 1]);
      reducedArr.pop();
    } else {
      helper(reducedArr.pop());
    }

    helper(reducedArr);
  }
  helper(arr);

  return tempArr.reverse();
}

// console.log(flatten([1]));
console.log(flatten([1, 2, [3]]));
