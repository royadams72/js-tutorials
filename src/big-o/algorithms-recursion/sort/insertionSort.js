const numbers = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];

// function insertionSort(arr) {
//   let activeIndex = 0;
//   for (let i = 0; i < arr.length; i++) {
//     activeIndex = i;
//     for (let j = activeIndex - 1; j >= 0; j--) {
//       if (arr[activeIndex] < arr[j]) {
//         const smaller = arr[j];
//         const bigger = arr[activeIndex];
//         arr[activeIndex] = smaller;
//         arr[j] = bigger;
//         activeIndex = j;
//         console.log(numbers);
//       }
//     }
//   }
// }

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // holds the value at index i
    const current = arr[i];
    // Always to the left
    let j = i - 1;
    // while j is more than or equal to "0"
    //And the value to the left is more than the current value
    while (j >= 0 && arr[j] > current) {
      console.log("arr[j]:", arr[j], "current::", current);
      // This copies the item to the left to the right as a place holder
      // Outside the loop this position is filled with current
      arr[j + 1] = arr[j];
      console.log(numbers);
      console.log("j::", j);

      j--;
    }
    /**
     When the while condition finally fails, j has gone one position past where current belongs, which is why this is:
     */
    // This is executed last, the place holder is filled
    arr[j + 1] = current;
  }

  return arr;
}

insertionSort(numbers);
console.log(numbers);
