const nums = [-3, -1, 4, -2, 5, -6];
// const nums = [3, -1, 4, -2, 5, -6];
var moveNegatives = function (nums) {
  let L = 0;
  let R = nums.length - 1;

  while (L < R) {
    if (nums[L] > 0 && nums[R] < 0) {
      [nums[R], nums[L]] = [nums[L], nums[R]];
    }
    if (nums[L] < 0) {
      console.log("nums[L]:", nums[L]);
      L++;
    }
    if (nums[R] > 0) {
      console.log("nums[L]:", nums[L]);
      R--;
    }
  }
  return nums;
};

console.log(moveNegatives(nums));
