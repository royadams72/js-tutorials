// const height = [1, 0, 6, 2, 5, 4, 8, 3, 0];
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
  let L = 0;
  let R = height.length - 1;
  let maxNum = 0;

  while (L < R) {
    function setMaxArea(num) {
      const temp = (R - L) * num;
      temp > maxNum ? (maxNum = temp) : maxNum;
    }

    if (height[L] < height[R]) {
      setMaxArea(height[L]);
      L++;
    }

    if (height[R] <= height[L]) {
      setMaxArea(height[R]);
      R--;
    }
  }
  return maxNum;
};

console.log(maxArea(height));
