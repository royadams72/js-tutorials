const numbers = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];

function selectionSort(arr) {
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    smallestIndex = i;
    let starterIndex = i;
    for (let j = starterIndex; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    const smallest = arr[smallestIndex];
    const start = arr[starterIndex];
    arr[starterIndex] = smallest;
    arr[smallestIndex] = start;
  }
}

selectionSort(numbers);
console.log(numbers);
