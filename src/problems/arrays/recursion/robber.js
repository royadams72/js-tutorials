/**
 * @param {number[]} nums
 * @return {number}
 */
// const numbers = [2, 7, 9, 3, 1] // = 12 ;
const numbers = [1, 2, 3, 1]; //= 4;
let count = 0;
var rob = function (nums) {
  function helper(i) {
    console.log("count", count++);
    // Base case:
    // once we've gone past the last house,
    // there is no more money to rob
    if (i >= nums.length) {
      return 0;
    }

    // Option 1: rob this house
    // so we must skip the next one
    const robCurrent = nums[i] + helper(i + 2);

    // Option 2: skip this house
    const skipCurrent = helper(i + 1);

    // Pick whichever choice gives us more money
    return Math.max(robCurrent, skipCurrent);
  }

  return helper(0);
};

var robCache = function (nums) {
  let cache = {};
  function helper(i) {
    console.log("count1", count++);
    // Base case:
    // once we've gone past the last house,
    // there is no more money to rob

    if (i in cache) {
      return cache[i];
    } else {
      if (i >= nums.length) {
        return 0;
      }

      // Option 1: rob this house
      // so we must skip the next one
      const robCurrent = nums[i] + helper(i + 2);

      // Option 2: skip this house
      const skipCurrent = helper(i + 1);
      cache[i] = Math.max(robCurrent, skipCurrent);
      // Pick whichever choice gives us more money
      return cache[i];
    }
  }
  return helper(0);
};

var robIteration = function (nums) {
  let prev2 = 0;
  let prev1 = 0;

  for (const money of nums) {
    const current = Math.max(
      prev1, // skip this house
      prev2 + money, // rob this house
    );

    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
};

console.log(robIteration(numbers));
