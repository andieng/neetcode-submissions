class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap: Record<string, string[]> = {}

        for (let i = 0; i < strs.length; i++) {
            const sortedStr = strs[i].split("").sort().join("");
            if (hashMap[sortedStr]) {
                hashMap[sortedStr].push(strs[i]);
            } else {
                hashMap[sortedStr] = [strs[i]]
            }
        }

        return Object.values(hashMap);
    }
}
