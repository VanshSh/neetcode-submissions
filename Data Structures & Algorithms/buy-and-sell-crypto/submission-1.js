class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = Infinity;
        let profit = 0;
        for (const price of prices) {
            if (price < buyPrice) {
                buyPrice = price;
            } else if (price - buyPrice > profit) {
                profit = price - buyPrice;
            }
        }
        return profit;
    }
}
