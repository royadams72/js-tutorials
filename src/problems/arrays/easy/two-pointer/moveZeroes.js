/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const numbers = [4, 1, 2, 0, 0];
var moveZeroes = function (nums) {
  let L = 0;
  let R = 1;

  while (R < nums.length) {
    if (nums[L] !== 0) {
      // Looking for zeros
      L++;
    }

    if (nums[R] === 0 || L === R) {
      // Looking for number above zeros
      R++;
    }

    if (nums[R] && nums[L] === 0 && nums[R] !== 0) {
      [nums[L], nums[R]] = [nums[R], nums[L]];
      R++;
    }
  }
};
moveZeroes(numbers);
