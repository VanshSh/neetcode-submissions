class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;
        const result = [];
        if (n < 3) return result;

        nums.sort((a, b) => a - b);

        for (let i = 0; i < n - 2; i++) {
            const a = nums[i];

            if (a > 0) break; // smallest is positive → done
            if (i > 0 && a === nums[i - 1]) continue; // skip duplicate anchor
            if (a + nums[i + 1] + nums[i + 2] > 0) break; // smallest possible sum > 0 → done
            if (a + nums[n - 2] + nums[n - 1] < 0) continue; // largest possible sum < 0 → try bigger a

            let left = i + 1;
            let right = n - 1;

            while (left < right) {
                const sum = a + nums[left] + nums[right];

                if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    result.push([a, nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) left++; // skip dup lefts
                    while (left < right && nums[right] === nums[right + 1]) right--; // skip dup rights
                }
            }
        }

        return result;
    }
}
