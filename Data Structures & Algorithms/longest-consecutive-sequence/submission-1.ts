class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        let sqLength = 0;

        for (const n of set) {
            if (!set.has(n - 1)) {
                let length = 1;
                while (set.has(n + length)) length++;

                sqLength = Math.max(length, sqLength);
            }
        }

        return sqLength;
    }
}
