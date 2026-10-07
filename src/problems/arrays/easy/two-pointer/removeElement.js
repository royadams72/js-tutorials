const nums = [3, 2, 2, 3];
const val = 3;

var removeElement = function (nums, val) {
  let L = 0;

  for (let R = 0; R < nums.length; R++) {
    if (nums[R] !== val) {
      console.log("nums[R]::", nums[R]);

      [nums[L], nums[R]] = [nums[R], nums[L]];
      L++;
    }
  }

  return L;
};

console.log(removeElement(nums, val));
