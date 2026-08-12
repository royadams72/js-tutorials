const hasSeen = {};

const firstRecurringNumber = function (numbersArray) {
  for (let i = 0; i < numbersArray.length; i++) {
    const hasSeenBefore = hasSeen[numbersArray[i]];
    if (hasSeenBefore) {
      return true;
    } else {
      hasSeen[numbersArray[i]] = true;
    }
  }
  return undefined;
};

const firstRecurringNumber2 = function (numbersArray) {
  for (let i = 0; i < numbersArray.length; i++) {
    console.log("i:", i);
    for (let j = i + 1; j < numbersArray.length; j++) {
      console.log(j);
      if (numbersArray[i] === numbersArray[j] && j === i + 1) {
        console.log(numbersArray[i]);
        return numbersArray[i];
      }
    }
  }
  return undefined;
};

firstRecurringNumber2([2, 9, 3, 6, 6, 4, 7, 3]);
