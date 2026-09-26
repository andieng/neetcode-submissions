class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<number, number> = {}

        for (let i = 0; i < nums.length; i++) {
            if (count[nums[i]] !== undefined) {
                count[nums[i]]++;
            } else {
                count[nums[i]] = 1;
            }
        }

        const sorted = Object.entries(count).sort((a, b) => b[1] - a[1])
        return sorted.slice(0, k).map(item => item[0] as unknown as number)
    }
}

