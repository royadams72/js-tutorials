/**
    L = last unique number
    R = searching for the next different number
     1) [1, 1, 2, 2, 3]
         L  R
      1 === 1 → duplicate, do nothing.

     2) [1, 1, 2, 2, 3]
         L     R
      1 !== 2 →  increment L, then copy R to L
      This overwrites whats on the left with the item on the right next to the last number i.e
      Before [1, 1, 2, 2, 3] after [1, 2, 2, 2, 3]

     3) [1, 2, 2, 2, 3]
            L     R
      2 === 2 → duplicate, do nothing.

      4) [1, 2, 2, 2, 3]
             L        R
      2 !== 3 →  increment L, then copy R to L.
       Before [1, 2, 2, 2, 3] after [1, 2, 3, 2, 3]
    */

const nums = [1, 1, 2, 2, 3];

var removeDuplicates = function (nums) {
  let L = 0;

  for (let R = 1; R < nums.length; R++) {
    console.log("L is at index:", L, "nums[L]:", nums[L]);

    if (nums[L] !== nums[R]) {
      L++;
      nums[L] = nums[R];
    }
  }
  console.log(nums);
  return L + 1;
};
console.log(removeDuplicates(nums));
