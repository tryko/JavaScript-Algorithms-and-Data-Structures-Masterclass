// some recursive
// Write a recursive function
// which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

function someRecursive(arr, callBack) {
  if (!arr.length) return false;
  else if (callBack(arr.pop())) return true;
  return someRecursive(arr, callBack);
}

console.log();
