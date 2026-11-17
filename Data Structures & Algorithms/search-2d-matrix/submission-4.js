class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    findIntInSortedArr(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) return true;
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }

    searchMatrix(matrix, target) {
        if (!matrix.length || !matrix[0].length) return false;

        for (let i = 0; i < matrix.length; i++) {
            const row = matrix[i];
            const lastVal = row[row.length - 1];

            // Target falls inside this row's range
            if (target <= lastVal) {
                return this.findIntInSortedArr(row, target);
            }

            // Target falls in the gap between this row and the next
            if (i + 1 < matrix.length && target < matrix[i + 1][0]) {
                return false;
            }
        }

        return false;
    }
}