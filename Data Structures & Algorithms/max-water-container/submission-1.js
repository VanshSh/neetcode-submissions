class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1
        let area = 0

        while(left<right){
         const newArea = (Math.min(heights[left],heights[right])) * (right-left)
         if(newArea>area) area = newArea
         if(heights[left]<heights[right]) left++
         else right--
        }
        return area
    }
}
