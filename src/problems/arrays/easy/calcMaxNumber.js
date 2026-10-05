/**
 * @param {number[]} prices
 * @return {number}
 */

const pricesArr = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  let smallest = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - smallest;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    //6, 4, 2, 5, 3
    console.log("profit:", profit);

    // console.log("maxProfit:", maxProfit);
    // console.log("smallest:", smallest);
    if (prices[i] < smallest) {
      smallest = prices[i];
      // updates to 1
    }
  }

  return maxProfit;
};

console.log(maxProfit(pricesArr));
