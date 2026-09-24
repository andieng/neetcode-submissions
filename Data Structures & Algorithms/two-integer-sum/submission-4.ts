class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashTable: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const numsJ = target - nums[i]
            if (hashTable[numsJ] !== undefined) {
                return [hashTable[numsJ], i]
            }
            hashTable[nums[i]] = i;
        }

        return []
    }
}
