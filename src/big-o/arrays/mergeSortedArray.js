// function mergeSortedArrays(arr1, arr2) {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

function mergeSortedArrays(arr1, arr2) {
  if (!arr1 && !arr2) return;
  const mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  console.log(mergedArray);
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const dups = new Set(nums);
  if (dups.size !== nums.length) {
    return true;
  }
  return false;
};

containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
