class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const prefixMax = new Array(height.length);
        const suffixMax = new Array(height.length);
        let amount = 0;

        prefixMax[0] = height[0];
        suffixMax[height.length - 1] = height[height.length - 1]
        
        for (let i = 1; i < height.length; i++) {
            let j = height.length - 1 - i;
            prefixMax[i] = Math.max(prefixMax[i - 1], height[i])
            suffixMax[j] = Math.max(suffixMax[j + 1], height[j])
        }

        for (let i = 0; i < height.length; i++) {
            amount += Math.min(prefixMax[i], suffixMax[i]) -  height[i];
        }
        
        return amount;
    }
}
