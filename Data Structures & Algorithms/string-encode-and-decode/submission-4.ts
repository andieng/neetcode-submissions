class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let length = 0, resultStr = "";
        for (const str of strs) {
            length = str.length;
            resultStr += `${length}#` + str;
        }

        return resultStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = [];
        let i = 0, j = 0;

        while (i < str.length) {
            j = i;
            while (str[j] !== '#') {
                j++;
            }
            const length = parseInt(str.substring(i, j));
            i = j + 1;
            result.push(str.substring(i, i + length))
            i += length
        }
        return result;
    }
}
