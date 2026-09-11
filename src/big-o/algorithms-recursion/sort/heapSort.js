const numbers = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];

function heapSortIterative(array) {
  function siftDown(start, heapSize) {
    let i = start;

    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let largest = i;

      if (left < heapSize && array[left] > array[largest]) {
        largest = left;
      }

      if (right < heapSize && array[right] > array[largest]) {
        largest = right;
      }

      // Parent is already bigger than both children
      if (largest === i) {
        break;
      }

      [array[i], array[largest]] = [array[largest], array[i]];

      // Follow the number we just moved down
      i = largest;
    }
  }

  // PART 1: Build the max heap
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    siftDown(i, array.length);
  }

  // PART 2: Sort
  for (let end = array.length - 1; end > 0; end--) {
    // Biggest value is at index 0.
    // Put it at the end.
    [array[0], array[end]] = [array[end], array[0]];

    // Ignore everything from "end" onwards.
    // Fix the remaining heap.
    siftDown(0, end);
  }

  return array;
}

const answer = heapSortIterative(numbers);
console.log(answer);
