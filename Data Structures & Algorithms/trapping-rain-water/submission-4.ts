class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let l = 0, r = height.length - 1, leftMax = height[l], rightMax = height[r], amount = 0;

        while (l < r) {
            if (height[l] < height[r]) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                amount += leftMax - height[l]
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                amount += rightMax - height[r]
            }
        }

        return amount;
    }
}
