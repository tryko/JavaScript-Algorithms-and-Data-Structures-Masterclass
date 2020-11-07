function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  // iterate over the string.
  // if letter is uniq than move pointer to the next
  // else move the start pointer and end pointer the same amount
  let subStrLength = 0; // this is the slide
  let longest = 0;
  let currLetter = "";
  let lettersCounter = {};

  if (str.length === 0 || str.length === 1) return str.length;

  for (let i = 0; i < str.length; i++) {
    currLetter = str[i];
    debugger;
    if (!lettersCounter[str[i]]) {
      subStrLength++;
      lettersCounter[str[i]] = [i, 1];
    } else {
      if (subStrLength > longest) longest = subStrLength;
      if (i > lettersCounter[str[i]][0]) {
        subStrLength = 0;
        startPointer = lettersCounter = {};
        i = lettersCounter[str[i]][0];
      }
    }
  }
  return longest;
}

// adiff solution:
// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
// console.log(findLongestSubstring("thisisawesome")); // 6
