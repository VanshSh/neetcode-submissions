class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const newS = s.replace(/[^a-zA-Z0-9]/g, "");
        for (let i = 0; i < newS.length / 2; i++) {
            if (newS[i].toLowerCase() != newS[newS.length - 1 - i].toLowerCase()) {
                return false;
            }
        }
        return true;

        //          let l = 0, r = s.length - 1;
        //   while (l < r) {
        //     while (l < r && !/[a-z0-9]/i.test(s[l])) l++;
        //     while (l < r && !/[a-z0-9]/i.test(s[r])) r--;
        //     if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        //     l++; r--;
        //   }
        //   return true;
    }
}
