function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not a string";
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

function reverse3(str) {
  return [...str].reverse().join("");
}

console.log(reverse3("I left my heart in san fransisco"));
