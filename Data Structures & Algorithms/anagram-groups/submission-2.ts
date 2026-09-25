class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap: Record<string, string[]> = {};

        for (let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0);
            for (let char of strs[i]) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const key = count.join(",")
            if (hashMap[key]) {
                hashMap[key].push(strs[i])
            } else {
                hashMap[key] = [strs[i]]
            }
        }

        return Object.values(hashMap)
    }
}
