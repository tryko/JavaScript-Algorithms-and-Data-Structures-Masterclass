function mergeFunc(arr) {

    if (arr.length <= 1 ) return arr;
    return [
      ...mergeFunc(arr.slice(0, Math.floor(arr.length / 2))),
      ...mergeFunc(arr.slice(Math.floor(arr.length / 2), arr.length - 1)),
    ];
}

// console.log(mergeFunc([1, 3, 5,2, 4, 6]));
// console.log(mergeFunc([4, 3, 5], [2, 1, 6]));
// console.log(mergeFunc([4, 3, 8, 6], [2, 1, 5, 7]));
// console.log(mergeFunc([4, 3, 8, 13, 6, 1, 12], [2, 14, 10, 9, 5, 11, 7]));


function merge(arr1, arr2) {
    const last1 = arr1.length - 1;
    const last2 = arr2.length - 1;
  
    if (arr1[last1] <= arr2[0]) {
      return arr1.concat(arr2);
    }
  
    if (arr2[last2] <= arr1[0]) {
      return arr2.concat(arr1);
    }
  
    const res = [];
    let leftPointer = 0;
    let rightPointer = 0;
  
    while (res.length < arr1.length + arr2.length) {
      if (leftPointer === arr1.length && rightPointer !== arr2.length) {
        res.push(arr2[rightPointer]);
        rightPointer++;
      } else if (rightPointer === arr2.length && leftPointer !== arr1.length) {
        res.push(arr1[leftPointer]);
        leftPointer++;
      } else {
        const leftElem = arr1[leftPointer];
        const rightElem = arr2[rightPointer];
        if (leftElem <= rightElem) {
          res.push(leftElem);
          leftPointer++;
        } else {
          res.push(rightElem);
          rightPointer++;
        }
      }
    }
    return res;
  }

console.log(merge( [ 6],[4]));
// console.log(merge([4, 3, 8, 6], [2, 1, 5, 7]));
// console.log(merge([4, 3, 8, 13, 6, 1, 12], [2, 14, 10, 9, 5, 11, 7]));