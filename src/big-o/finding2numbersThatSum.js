function hasPairWithSum2(arr1, sum) {
  const mySet = new Set();
  const len = arr1.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr1[i])) {
      return console.log(arr1[i]);
    }
    mySet.add(sum - arr1[i]);
  }
  return console.log("not found");
}
hasPairWithSum2([3, 5, 0, 8, 4], 9);
