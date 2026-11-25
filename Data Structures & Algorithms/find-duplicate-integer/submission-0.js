class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const map = new Map();

        for (let i of nums) {
            if (map.has(i)) {
                return i;
            } else {
                map.set(i, i);
            }
        }
    }
}
