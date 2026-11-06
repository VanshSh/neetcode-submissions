class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arrayLength = nums.length;
        const result = new Array(arrayLength);

        // ---- Pass 1: left to right ----
        // left = product of all numbers BEFORE index i
        let left = 1; // nothing before index 0, so start with 1

        for (let i = 0; i < arrayLength; i++) {
            result[i] = left; // save the product of numbers before i (nums[i] not included yet)
            left *= nums[i]; // now include nums[i] so the next index can use it
        }
        // result now = [1, 1, 2, 8] for input [1, 2, 4, 6]

        // ---- Pass 2: right to left ----
        // right = product of all numbers AFTER index i
        let right = 1; // nothing after the last index, so start with 1

        for (let i = arrayLength - 1; i >= 0; i--) {
            result[i] *= right; // multiply (not replace!) the left product by the right product
            right *= nums[i]; // now include nums[i] so the previous index can use it
        }
        // result now = [48, 24, 12, 8]

        return result; // each result[i] = (product before i) × (product after i)
    }
}
