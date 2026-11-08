class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyprice;
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            buyprice = prices[i];
            for (let j = i; j < prices.length; j++) {
                if (prices[j] > buyprice) {
                    if (prices[j] - buyprice > profit) {
                        profit = prices[j] - buyprice;
                    }
                }
            }
        }
        return profit;
    }
}
