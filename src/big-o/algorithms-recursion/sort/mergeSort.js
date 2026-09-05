const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  // base case; split until one item in array
  // an array with one item is already sorted
  if (array.length === 1) {
    return array;
  }
  /**
 * Conceptually, each call does this:
    1. Retains its own array, left, right, and middle.
    2. Waits for mergeSort(left) to return.
    3. Waits for mergeSort(right) to return.
    4. Calls merge() with those two sorted results.
    5. Returns the merged result.
 */
  // Split Array into right and left halves
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // This call waits here while both halves are recursively sorted.
  // Its local variables remain stored in its call-stack frame.
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // Merging begins as recursive calls return from the base case.
  // This is executed in reverse when base case is met
  // console.log("left::", left, "right::", right);

  while (leftIndex < left.length && rightIndex < right.length) {
    /**
      left = [2, 6]; leftIndex = 2; 2 < 2 false
      right = [1, 4, 8];  rightIndex = 2; 2 < 3 true
      so this condition becomes false and stops
     */
    // Add the smaller current value to the result.
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // The other array may still contain values that haven’t been pushed.  left = [2, 6]; right = [1, 4, 8]; right would still have 8 remaining
  // Create a new array containing everything from index to the end of left and right arrays added to the end of result.
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);
