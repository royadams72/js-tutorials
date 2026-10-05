let nums = [-4, -1, 0, 3, 10];

var sortedSquares = function (nums) {
  let L = 0;
  let R = nums.length - 1;
  // 1. Create a brand new array of the exact same size
  let newArr = new Array(nums.length);

  // 2. Track where to place the next largest square (start from the very
  let writePointer = nums.length - 1;
  while (L <= R) {
    const left = nums[L] * nums[L];
    const right = nums[R] * nums[R];
    // console.log(left, right);
    console.log(newArr);
    if (left > right) {
      newArr[writePointer] = left; // Place the larger square at the back
      L++; // Move the left pointer inward
    } else {
      newArr[writePointer] = right; // Place the larger square at the back
      R--; // Move the right pointer inward
    }
    writePointer--; // Move our placement position one step to the left
  }

  return newArr;
};
//  [16, -1, 0, 3, 100]
//    L             R
//                  W
//  [9, -1, 0, 16, 100]
//        L     R
//              W
//  [9, -1, 0, 16, 100]
//        L     R
//              W

console.log(sortedSquares(nums));
