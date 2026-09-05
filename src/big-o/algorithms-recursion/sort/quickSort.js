let numbers = [3, 7, 8, 5, 2, 1, 9, 5, 4];

// function quickSort(array) {
//   let startIndex = 0;
//   let swapIndex = 0;
//   const pivot = array[array.length - 1];

//   for (let i = startIndex; i < array.length; i++) {
//     for(let j = 0; j < array.length; j++){

//     }

//   //  if( array[i]){

//   //  }
//   }
// }

function quickSort(array) {
  if (array.length <= 0) {
    return array;
  }
  let startIndex = 0;
  let swapIndex = 0;
  // let pivot = array[array.length - 1];
  let pivotIndex = array.length;

  // [2, 5, 7, 9, 12, 15]
  while (startIndex < pivotIndex - 1) {
    console.log("startIndex::", startIndex, "pivotIndex::", pivotIndex - 1);
    // console.log(array[pivotIndex - 1]);
    if (array[startIndex] > array[pivotIndex - 1]) {
      // console.log(numbers);

      // console.log(
      //   "swap item::",
      //   array[startIndex],
      //   "pivot::",
      //   array[pivotIndex],
      //   "before::",
      //   array[pivotIndex - 1],
      // );
      const swapItem = array[startIndex];
      const beforePivot = array[pivotIndex - 2];
      const pivot = array[pivotIndex - 1];
      // console.log("startIndex::", startIndex, "pivotIndex::", pivotIndex);
      // [3, 7, 8, 5, 2, 1, 9, 5, 4]
      array[startIndex] = beforePivot;
      array[pivotIndex - 1] = swapItem;
      array[pivotIndex - 2] = pivot;
      pivotIndex--;
    } else {
      startIndex++;
    }
  }
  return array;
}

const anwser = quickSort(numbers);
console.log(anwser);
