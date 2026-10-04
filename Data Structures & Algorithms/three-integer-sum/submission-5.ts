class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = nums.sort((a, b) => a - b);
        const results: number[][] = [];
        
        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let j = i + 1, k = sorted.length - 1;
            while (j < k) {
                const sum = sorted[i] + sorted[j] + sorted[k];
                if (sum === 0) {
                    results.push([sorted[i], sorted[j], sorted[k]])
                    j++;
                    k--;

                    while (j < k && sorted[j] === sorted[j - 1]) {
                        j++;
                    }
                } else if (sum > 0) {
                    k--;
                } else {
                    j++;
                }
            }
        }

        return results;
    }
}
