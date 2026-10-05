const s = "Han'?@`;/tnah";
var isPalindrome = function (s) {
  s = s.toLowerCase();

  let L = 0;
  let R = s.length - 1;

  function isAlphanumeric(char) {
    const code = char.charCodeAt(0);

    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
  }

  while (L < R) {
    if (!isAlphanumeric(s[L])) {
      L++;
      continue;
    }

    if (!isAlphanumeric(s[R])) {
      R--;
      continue;
    }

    if (s[L] !== s[R]) {
      return false;
    }

    L++;
    R--;
  }

  return true;
};

console.log(isPalindrome(s));
