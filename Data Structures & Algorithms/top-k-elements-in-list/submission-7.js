class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

        // buckets[i] = numbers that appear exactly i times
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, count] of freq) buckets[count].push(num);

        const result = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) break;
            }
        }
        return result;
    }
}
