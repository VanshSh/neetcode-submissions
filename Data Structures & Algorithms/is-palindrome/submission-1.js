class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const newS = s.replace(/[^a-zA-Z0-9]/g, "");

        for (let i = 0; i < newS.length / 2; i++) {
            console.log({
                start: newS[i].toLowerCase(),
                end: newS[newS.length - 1 - i].toLowerCase(),
            });
            if (newS[i].toLowerCase() != newS[newS.length - 1 - i].toLowerCase()) {
                return false;
            }
        }
        return true;
    }
}
