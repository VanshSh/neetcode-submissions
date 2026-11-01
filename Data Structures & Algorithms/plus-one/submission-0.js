class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
      const digitsLen = digits.length - 1
      for(let i = digitsLen; i>=0;i--){
       if(digits[i]<9){
         digits[i]++
         return digits
         
       } 
       digits[i] = 0
      }
      const result = [1, ...Array(digits.length).fill(0)];
      return result;
      
    }
}