/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentTotal = nums[0];
  let bestTotal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    console.log(
      "nums[i]:",
      nums[i],
      "currentTotal + nums[i]:",
      currentTotal + nums[i],
    );
    currentTotal = Math.max(nums[i], currentTotal + nums[i]);

    bestTotal = Math.max(bestTotal, currentTotal);
    console.log(bestTotal);
  }
  // console.log(bestTotal);
  return bestTotal;
};

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// var nums = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums));
