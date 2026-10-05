const str = ["e", "x", "a", "m", "p", "l", "e"];
// example
// elpmaxe
var reverseString = function (s) {
  let L = 0;
  let R = s.length - 1;

  while (L < R) {
    [s[L], s[R]] = [s[R], s[L]];
    L++;
    R--;
  }
};
reverseString(str);
