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

        const freq: number[][] = Array.from({length: nums.length + 1}, () => []); // index is freq count in array, value is an array of items that has that freq count

        for (let [num, cnt] of Object.entries(count)) {
            freq[cnt].push(num as unknown as number)
        }

        const res: number[] = []
        for (let i = nums.length; i >= 0; i--) {
            if (freq[i].length > 0) {
                res.push(...freq[i])
            }
            if (res.length === k) break;
        }

        return res;
    }
}

