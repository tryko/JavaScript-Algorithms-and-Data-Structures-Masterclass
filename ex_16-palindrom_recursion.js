function isPalindrom(str) {
  if (str.length < 2) return true;
  return (
    str[0] === str[str.length - 1] && isPalindrom(str.slice(1, str.length - 1))
  );
}

console.log(isPalindrom("aabbaa")); // true
console.log(isPalindrom("aabaa")); // true
console.log(isPalindrom("acbda")); // true
