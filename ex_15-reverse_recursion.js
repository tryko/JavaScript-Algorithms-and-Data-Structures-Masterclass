function reverse(str) {
  const revArr = [];
  const strArr = str.split("");
  function helper(arr) {
    if (!arr.length) return;
    const currLetter = arr.pop();
    revArr.push(currLetter);
    helper(arr);
  }
  helper(strArr);
  return revArr.join("");
}

console.log(reverse("awesome")); // emosewa
