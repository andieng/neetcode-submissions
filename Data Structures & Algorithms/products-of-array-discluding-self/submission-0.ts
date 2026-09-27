class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefix: number[] = new Array(nums.length).fill(0);
        const suffix: number[] = new Array(nums.length).fill(0);
        prefix[0] = nums[0];
        suffix[nums.length - 1] = nums[nums.length - 1];

        for (let i = 1; i < nums.length; i++) {
            const j = nums.length - i - 1;
            prefix[i] = prefix[i - 1] * nums[i];
            suffix[j] = suffix[j + 1] * nums[j];
        }

        const res: number[] = []
        for (let i = 0; i < nums.length; i++) {
            res.push((prefix[i - 1] ?? 1) * (suffix[i + 1] ?? 1))
        }
        return res;
    }
}
