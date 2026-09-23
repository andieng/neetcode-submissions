class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashTable: Record<number, number> = {};
        for (let i = 0; i < nums.length; i++) {
            if (hashTable[nums[i]]) return true;
            hashTable[nums[i]] = 1;
        }
        return false;
    }
}
