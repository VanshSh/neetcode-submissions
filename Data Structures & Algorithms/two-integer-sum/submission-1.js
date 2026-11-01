class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // we will first create a map to store our values whilei iterating along with index
        // we will run a for loop
        // we will keep subtrating target - arr[i] and check in the map if exists then return the value which is index
        // else we will store it in the index

        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const matchingValue = target - nums[i];
            if (map.has(matchingValue)) {
                return [i, map.get(matchingValue)];
            } else {
                map.set(nums[i], i);
            }
        }
    }
}
