const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(numbers);
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("first loop", arr[i]);

    //  For each number in the array it loops through the entire array
    // And check if the current number is larger than the one next to it
    for (let j = 0; j < arr.length; j++) {
      console.log("second loop", arr[j]);
      //
      if (arr[j] > arr[j + 1]) {
        // need top save as a temp, if not the item is lost
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort(numbers);
