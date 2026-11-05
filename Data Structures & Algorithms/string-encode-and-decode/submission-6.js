class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newStr = "";
        for (const str of strs) newStr += `${str.length}#${str}`;
        return newStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const newArr = [];
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++;

            const len = Number(str.slice(i, j));

            const wordStart = j + 1;

            newArr.push(str.slice(wordStart, wordStart + len));

            i = wordStart + len;
        }
        return newArr
    }
}
