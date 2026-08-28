function fibonacciRecursive(number) {
  // console.log("START fib:", number);
  // Function called with a number
  // until it reaches the base case, so there could be many calls
  if (number < 2) {
    // console.log("BASE CASE RETURNED:", number);
    return number;
  }
  // If base case not returned this line calls the function again
  // but the code beneath is not executed, the function is "paused"
  const num1 = fibonacciRecursive(number - 1);
  console.log(`fib(${number}) got num1:`, num1);
  /*
    when base case returned we continue the execution of each
    pauseed function in reverse oreder starting with the last call value
    **/

  const num2 = fibonacciRecursive(number - 2);
  console.log(`fib(${number}) got num2:`, num2);

  const answer = num1 + num2;

  console.log(`RETURN fib(${number}):`, answer);

  return answer;
}

// console.log("FINAL:", fibonacciRecursive(4));
function fibonacciIterative(number) {
  let arr = [0, 1];
  for (let i = 2; i < number + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[number];
}

console.log("FINAL:", fibonacciIterative(8));
