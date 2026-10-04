class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = 0;
        let l = 0, r = heights.length - 1;

        while (l < r) {
            const w = r - l;
            const h = Math.min(heights[l], heights[r]);
            max = Math.max(w * h, max);

            if (h === heights[l]) {
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}
