class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let amount = 0, l = 0, r = height.length - 1, leftMax = height[l], rightMax = height[r];

        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l])
                amount += leftMax - height[l]
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r])
                amount += rightMax - height[r]
            }
        }
        
        return amount;
    }
}
