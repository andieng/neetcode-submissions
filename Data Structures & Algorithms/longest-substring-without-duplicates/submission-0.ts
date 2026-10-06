class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set();
        let l = 0, r = 0, res = 0;

        while (r < s.length) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r])
            res = Math.max(res, r - l + 1)
            r++;
        }

        return res;
    }
}
