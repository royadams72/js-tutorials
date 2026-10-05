const numbers = [2, 7, 11, 15];

var twoSum = function (numbers, target) {
  if (!numbers.length || target === undefined) {
    return "check properties!";
  }
  let L = 0;
  let R = numbers.length - 1;

  while (L <= R) {
    const sum = numbers[L] + numbers[R];
    if (sum === target) {
      return [L, R];
    }
    if (sum > target) {
      R--;
    }
    if (sum < target) {
      L++;
    }
  }
};

console.log(twoSum(numbers, 9));
