/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    console.log("s::", s[i]);
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
