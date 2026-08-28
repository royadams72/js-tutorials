function findFactorialRecursive(number) {
  console.log("going down", number);

  if (number === 1) {
    return number;
  }
  const answer = number * findFactorialRecursive(number - 1);

  console.log("coming back up:", answer);

  return answer;
}

function findFactorialIterative(number) {
  let answer = 1;

  return answer;
}
findFactorialRecursive(5);
// findFactorialRecursive(5);
