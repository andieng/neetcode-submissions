class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxP = 0, min = prices[0];

        for (let i = 0; i < prices.length; i++) {
            min = Math.min(prices[i], min)
            maxP = Math.max(prices[i] - min, maxP);
        }

        return maxP;
    }
}

// [10,1,5,6,7,1]