const nums1 = [1, 7, 8];
const nums2 = [2, 5, 9];
var mergeSorted = function (nums1, nums2) {
  let L = 0;
  let R = 0;
  let result = [];

  while (result.length !== nums1.length + nums2.length) {
    if (nums1[L] === undefined) {
      result.push(nums2[R]);
      R++;
    } else if (nums2[R] === undefined) {
      result.push(nums1[L]);
      L++;
    } else if (nums1[L] <= nums2[R]) {
      result.push(nums1[L]);
      L++;
    } else if (nums1[L] > nums2[R]) {
      result.push(nums2[R]);
      R++;
    }
  }

  return result;
};

console.log(mergeSorted(nums1, nums2));
