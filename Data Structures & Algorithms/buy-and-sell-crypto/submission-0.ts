class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0, r = 1, max = 0;
        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
            } else {
                max = Math.max(max, prices[r] - prices[l])
            }

            r++;
        }
        return max;
    }
}

// [10,1,5,6,7,1]