const nums1 = [0, 1, 2, 4, 5, 7]; // L
const nums2 = [2, 3, 5, 6]; // R

var intersection = function (nums1, nums2) {
  let L = 0;
  let R = 0;
  let values = [];

  while (L < nums1.length && R < nums2.length) {
    if (nums1[L] === nums2[R]) {
      values.push(nums1[L]);
      L++;
      R++;
    }

    if (nums1[L] < nums2[R]) {
      L++;
    } else if (nums2[R] < nums1[L]) {
      R++;
    }
  }
  return values;
};

console.log(intersection(nums1, nums2));
