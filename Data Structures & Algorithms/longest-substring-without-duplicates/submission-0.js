class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const lastSeen = new Map(); // char -> last index
        let start = 0;
        let best = 0;

        for (let i = 0; i < s.length; i++) {
            const ch = s[i];
            // Only move start if the duplicate is inside the current window
            if (lastSeen.has(ch) && lastSeen.get(ch) >= start) {
                start = lastSeen.get(ch) + 1;
            }
            lastSeen.set(ch, i);
            best = Math.max(best, i - start + 1);
        }
        return best;
    }
}
