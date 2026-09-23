class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const hashMap: Record<string, number> = {}

        for (let i = 0; i < s.length; i++) {
            if (hashMap[s[i]] !== undefined) {
                hashMap[s[i]]++;
            } else {
                hashMap[s[i]] = 1;
            }
            
            const tIndex = t.length - i - 1;
            if (hashMap[t[tIndex]] !== undefined) {
                hashMap[t[tIndex]]--;
            } else {
                hashMap[t[tIndex]] = -1;
            }
        }

        for (const count of Object.values(hashMap)) {
            if (count !== 0) return false
        }

        return true;
    }
}
