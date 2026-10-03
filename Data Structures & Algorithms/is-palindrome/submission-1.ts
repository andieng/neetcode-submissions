class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    private isAlphaCharCode(str: string): boolean {
        if (!str) return false;
        const code = str.charCodeAt(0);
        return (
        (code >= 48 && code <= 57) ||  // 0-9
        (code >= 65 && code <= 90) ||  // A-Z
        (code >= 97 && code <= 122)    // a-z
    );
    }

    isPalindrome(s: string): boolean {
        let i = 0, j = s.length - 1;
        while (i < j) {
            while (i < j && !this.isAlphaCharCode(s[i])) {
                i++;
            }
            while (i < j && !this.isAlphaCharCode(s[j])) {
                j--;
            }

            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
