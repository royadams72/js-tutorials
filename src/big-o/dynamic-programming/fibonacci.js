// 0, 1, 1 ,2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;
function fibonacciRecursive(number) {
  calculations++;
  console.log("number::", number);

  if (number < 2) {
    // console.log("BASE CASE RETURNED:", number);
    return number;
  }
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

function fibonacciMaster() {
  // Create a cache so we don't repeat
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      //  Base case for recursive function
      if (n < 2) {
        return n;
      } else {
        // write to cache when fibonacci number found
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

// const fibMaster = fibonacciMaster();
// console.log(fibMaster(10));
fibonacciRecursive(10);
console.log(calculations);
