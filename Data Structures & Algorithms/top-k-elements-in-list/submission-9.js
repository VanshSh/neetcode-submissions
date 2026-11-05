class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // ── Step 1: Count how many times each number appears ──
        const map = new Map();

        for (const num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1); // seen before → increment
            } else {
                map.set(num, 1); // first time → start at 1
            }
        }
        // map = { 1 → 1, 2 → 2, 3 → 3, 4 → 1 }

        // ── Step 2: Create buckets where index = frequency ──
        // Max possible frequency is nums.length, so we need length + 1 slots.
        // () => [] gives every slot its OWN empty array (not a shared reference).
        const bucket = Array.from({ length: nums.length + 1 }, () => []);

        // ── Step 3: Put each number in the bucket matching its frequency ──
        for (const [num, freq] of map) {
            bucket[freq].push(num);
        }
        // bucket = [ [], [1,4], [2], [3], [], [], [], [] ]

        // ── Step 4: Walk from highest frequency to lowest, collect k numbers ──
        const result = [];

        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                // ← fixed: added const
                result.push(num);
                if (result.length === k) {
                    return result; // got k numbers → done
                }
            }
        }

        return result; // safety net: if k > number of unique values
    }
}
