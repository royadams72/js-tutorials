function reverseString(str, counter) {
  if (counter === str.length) {
    return "";
  }
  console.log(counter);
  counter++;
  const letter = str.charAt(counter);
  console.log(counter);
  return reverseString(str, counter) + letter;
}

console.log(reverseString("reverse", 0));
// reverseString("reverse", 0);
