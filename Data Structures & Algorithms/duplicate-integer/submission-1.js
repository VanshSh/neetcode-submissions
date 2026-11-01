class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()
        for (const i in nums) {
            if (seen.has(nums[i])) {
                return true
            } else {
                seen.add(nums[i])
            }
        }
        return false
    }
}