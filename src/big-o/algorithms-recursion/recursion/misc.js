// function countDown(number) {
//   if (number === 0) {
//     return 0;
//   }
//   console.log(number);

//   return countDown(number - 1);
// }

// console.log(countDown(5));

// function sumDown(number) {
//   if (number === 1) {
//     return 1;
//   }
//   console.log(number);

//   return number + sumDown(number - 1);
// }

// console.log(sumDown(5));

// function multiplyDown(number) {
//   if (number === 1) {
//     return 1;
//   }
//   console.log(number);

//   return number * multiplyDown(number - 1);
// }

// console.log(multiplyDown(5));

// function countLetters(str) {
//   if (str === "") {
//     return 0;
//   }
//   console.log(str);

//   return 1 + countLetters(str.slice(1));
// }

// console.log(countLetters("max"));

// function countVowels(str) {
//   if (str === "") {
//     return 0;
//   }
//   const count = "aeiou".includes(str.charAt(0)) ? 1 : 0;
//   return count + countVowels(str.slice(1));
// }

// console.log(countVowels("hello"));

// function findLargest(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   }

//   const firstNum = arr[0];
//   const largestInRest = findLargest(arr.slice(1));

//   return Math.max(firstNum, largestInRest);
// }
// console.log(findLargest([3, 8, 2, 10, 4]));

// function sumArrayIterative(arr) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     num += arr[i];
//   }
//   return num;
// }

// function sumArrayRecursive(arr) {
//   // This pauses the functions until the array is empty
//   if (arr.length === 0) {
//     return 0;
//   }
//   // when the functions unpause they add the numbers together
//   // sumArrayRecursive returns 0 when it reaches the base case
//   // Then adds arr[0] to subsequent calls after
//   // basically calls the function, then adds whats returned, this function can hold
//   // returned properties in memory
//   const answer = sumArrayRecursive(arr.slice(1)) + arr[0];

//   return answer;
// }

// console.log(sumArrayRecursive([2, 4, 6, 8, 6]));
// console.log(sumArrayIterative([2, 4, 6, 8, 6]));

// function countGreaterThanFiveIterative(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//       count++;
//     }
//   }
//   return count;
//   // use a loop
// }
// // console.log(countGreaterThanFiveIterative([2, 8, 4, 10, 7]));
// // [2, 8, 4, 10, 7]
// function countGreaterThanFiveRecursive(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let count = 0;
//   if (arr[0] > 5) {
//     count++;
//   }
//   // when this call unpauses, it receives the value returned by the deeper recursive call
//   return countGreaterThanFiveRecursive(arr.slice(1)) + count;
//   // use recursion
// }
// console.log(countGreaterThanFiveRecursive([2, 8, 4, 10, 7, 6]));

// function findFirstEvenIterative(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       return arr[i];
//     }
//   }
// }

// function findFirstEvenRecursive(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }

//   if (arr[0] % 2 === 0) {
//     return arr[0];
//   }
//   // "I don't have the answer in this call, so ask the next recursive call and return whatever answer it eventually gives me."
//   return findFirstEvenRecursive(arr.slice(1));
// }
// // console.log(findFirstEvenIterative([3, 7, 6, 8, 4]));
// console.log("findFirstEvenRecursive::", findFirstEvenRecursive([3, 7, 8, 4]));
// [3, 7, 9, 8, 4]
// function findFirstNegativeRecursive(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }

//   if (arr[0] < 0) {
// return arr[0];
//   }
//   // "I don't have the answer in this call, so ask the next recursive call and return whatever answer it eventually gives me."
//   return findFirstNegativeRecursive(arr.slice(1));
// }
// console.log(findFirstNegativeRecursive([4, 7, 2, -3, 8]));

// function containsZeroRecursive(arr) {
//   if (arr.length === 0) {
//     return false;
//   }

//   if (arr[0] === 0) {
//     return true;
//   }
//   // "I don't have the answer in this call, so ask the next recursive call and return whatever answer it eventually gives me."
//   return containsZeroRecursive(arr.slice(1));
// }

// console.log(containsZeroRecursive([4, 7, 2, 4, 8]));

// function countOddRecursive(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let count = 0;
//   if (arr[0] % 2 > 0) {
//     count++;
//   }
//   // when this call unpauses, it receives the value returned by the deeper recursive call
//   return countOddRecursive(arr.slice(1)) + count;
//   // return how many odd numbers are in the array
// }

// console.log(countOddRecursive([4, 7, 2, 3, 9]));
// function sumPositiveRecursive(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   if (arr[0] > 0) {
//     sum += arr[0];
//   }
//   return sumPositiveRecursive(arr.slice(1)) + sum;
// }

// console.log(sumPositiveRecursive([-2, 5, 3, -1, 4, 2]));

// function countGreaterThanTenRecursive(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let count = 0;
//   if (arr[0] > 10) {
//     count++;
//   }
//   return countGreaterThanTenRecursive(arr.slice(1)) + count;
// }
// console.log(countGreaterThanTenRecursive([4, 12, 7, 20, 11, 23]));

// function findLargestRecursive(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   const firstNum = arr[0];
//   // we pause here because we have not reached the base case
//   const largestInRest = findLargestRecursive(arr.slice(1));
//   // Once the base case is reached...
//   /**
//    * final iteration
//     [4, 12, 7, 20, 11]
//     firstNum = 4
//     largestInRest = 20
//     Math.max(4, 20) → 20
//     return 20
//    */
//   return Math.max(firstNum, largestInRest);
// }
// console.log(findLargestRecursive([4, 12, 7, 20, 110]));

// function sumDigitsRecursive(num) {
//   if (num.toString().length === 1) {
//     return Number(num);
//   }
//   let digit = Number(num.toString()[0]);
//   return sumDigitsRecursive(num.toString().slice(1)) + digit;
// }

// function sumDigitsIterative(num) {
//   let sum = 0;
//   for (let i = 0; i < num.toString().length; i++) {
//     sum += Number(num.toString()[i]);
//   }
//   return sum;
// }

// // console.log(sumDigitsIterative(4821));
// console.log(sumDigitsRecursive(48212));
// function isPalindromeRecursive(str) {
//   if (str.length === 0) {
//     return true;
//   }

//   if (str.charAt(0) !== str.charAt(str.length - 1)) {
//     return false;
//   }

//   return isPalindromeRecursive(str.slice(1, -1));
// }
// console.log(isPalindromeRecursive("reverse"));
// console.log(isPalindromeRecursive("raceca"));

// function isPalindromeIterative(str) {
//   // console.log("sgsg", str.length);

//   for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
//     console.log(str.charAt(str.length - i - 1));

//     if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
//       return false;
//     }
//   }

//   return true;
// }
// console.log(isPalindromeIterative("racecar"));

// function countOccurrencesRecursive(arr, target) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let count = 0;
//   if (arr[0] === target) {
//     count++;
//   }
//   console.log(count);
//   console.log(arr);
//   return countOccurrencesRecursive(arr.slice(1), target) + count;
// }

// function countOccurrencesIterative(arr, target) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countOccurrencesIterative([2, 5, 2, 7, 2, 9], 2));

function capitalizeWordsRecursive(words) {
  if (words.length < 1) {
    return words[0];
  }

  const firstWord = words[0];
  firstWord.toUpperCase();
  words[0] = firstWord.toUpperCase();
  const newWords = words[0];
  // console.log(words);

  const a = capitalizeWordsRecursive(words.slice(1)) + newWords;
  console.log(words);
  return a;
}
console.log(capitalizeWordsRecursive(["hello", "world", "recursive"]));
