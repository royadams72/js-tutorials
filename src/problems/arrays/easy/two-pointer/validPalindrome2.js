/**
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false


 * @param {string} s
 * @return {boolean}
 */
// abca racecart rracecabr
const s = "aab";
// var validPalindrome = function (s) {
//   let L = 0;
//   let R = s.length - 1;
//   let count = 0;

//   while (L < R) {
//     if (s[L] !== s[R]) {
//       if (count === 1 || s[L + 1] === s[R - 1]) {
//         return false;
//       }
//       if (s[L + 1] === s[R]) {
//         count++;
//         L++;
//       } else if (s[R - 1] === s[L]) {
//         count++;
//         R--;
//       }
//     }
//     L++;
//     R--;
//   }
//   return true;
// };

var validPalindrome = function (s) {
  let L = 0;
  let R = s.length - 1;

  function isPalindrome(left, right) {
    // check whether the rest of the string is a palindrome
    //  but must check from
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  }

  while (L < R) {
    if (s[L] !== s[R]) {
      return isPalindrome(L + 1, R) || isPalindrome(L, R - 1);
    }

    L++;
    R--;
  }

  return true;
};

console.log(validPalindrome(s));
