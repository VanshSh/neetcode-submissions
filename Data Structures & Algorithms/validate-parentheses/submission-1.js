class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const mapping = {
            "]": "[",
            "}": "{",
            ")": "(",
        };

        const stack = [];
        for (let i of s) {
            if (i in mapping) {
                if (stack.pop() !== mapping[i]) return false;
            } else {
                stack.push(i);
            }
        }
        return stack.length === 0;
    }
}
