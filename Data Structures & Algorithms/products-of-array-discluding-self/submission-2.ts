class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res: number[] = new Array(nums.length).fill(1);
        let suffix = 1;

        for (let i = 0; i < nums.length; i++) {
            res[i] = (res[i - 1] ?? 1) * nums[i];
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] = (res[i-1] ?? 1) * suffix;
            suffix *= nums[i]
        }

        return res;
    }
}
