class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashTable: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            hashTable[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            const numsJ = -(nums[i] - target);
            if (hashTable[numsJ] && hashTable[numsJ] !== i) {
                const j = hashTable[numsJ]
                if (j < i)
                    return [j, i]
                else return [i, j]
            }
        }

        return []
    }
}
