const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function quickSort(array) {
//   if (array.length <= 1) {
//     return array;
//   }
//   let startIndex = 0;
//   let pivotIndex = array.length - 1;

//   // [2, 5, 7, 9, 12, 15]
//   while (startIndex < pivotIndex) {
//     // console.log(array[pivotIndex - 1]);
//     if (array[startIndex] > array[pivotIndex]) {
//       const swapItem = array[startIndex];
//       const beforePivot = array[pivotIndex - 1];
//       const pivot = array[pivotIndex];
//       // [3, 7, 8, 5, 2, 1, 9, 5, 4]
//       array[startIndex] = beforePivot;
//       array[pivotIndex] = swapItem;
//       array[pivotIndex - 1] = pivot;
//       pivotIndex--;
//     } else {
//       startIndex++;
//     }
//   }
//   console.log(array);
//   const length = array.length;
//   const middle = Math.floor(length / 2);
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);
//   return array;
// }

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let startIndex = 0;
  let pivotIndex = array.length - 1; // Make the last item in the array the pivot
  // when startIndex meets pivotIndex it means we have check all numbers
  // And hopefully the pivot is central
  while (startIndex < pivotIndex) {
    if (array[startIndex] > array[pivotIndex]) {
      // Check the current item against the pivot
      // If its more than: move the pivot one space to the left
      // move the item that was one space to the left to the current items position
      // move the current item to the right of the pivot
      const swapItem = array[startIndex];
      const beforePivot = array[pivotIndex - 1];
      const pivot = array[pivotIndex];

      array[startIndex] = beforePivot;
      array[pivotIndex - 1] = pivot;
      array[pivotIndex] = swapItem;
      // make sure to update the pivot index as we've moved the pivot on space to the left
      pivotIndex--;
    } else {
      // Update the startIndex if the current item is less than the pivot value, because it should stay on the left
      startIndex++;
    }
  }

  const left = quickSort(array.slice(0, pivotIndex));
  const pivot = array[pivotIndex];
  const right = quickSort(array.slice(pivotIndex + 1));

  return [...left, pivot, ...right];
}

const answer = quickSort(numbers);
console.log(answer);
