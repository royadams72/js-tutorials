/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const check = new Map();
  for (let i = 0; i < nums.length; i++) {
    console.log("check::", check);

    const currentNum = nums[i];
    if (check.has(currentNum)) {
      return [check.get(currentNum), i];
    }

    check.set(target - currentNum, i);
  }
};

console.log(twoSum([2, 11, 7, 15], 9));
