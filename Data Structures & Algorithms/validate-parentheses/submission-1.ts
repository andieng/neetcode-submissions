class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const closedBracketMap: Record<string, string> = { 
            ')': '(',
            ']': '[',
            '}': '{',
        }
        const openBracketMap: Record<string, string> = {
            '(': ')',
            '[': ']',
            '{': '}'
        }
        const closedBracketStack: string[] = [];

        for (const c of s) {
            if (openBracketMap[c]) {
                closedBracketStack.push(openBracketMap[c]);
            } else if (closedBracketMap[c] && c !== closedBracketStack.pop()) {
                return false;
            }
        }

        return closedBracketStack.length === 0;
    }
}
