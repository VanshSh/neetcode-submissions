class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
       const seen = new Set()
       while(n !==1){
        if(seen.has(n)){
            return false
        }
        seen.add(n)
        n = this.sumSquareDigits(n)

       }
       return true

    }

    sumSquareDigits(num) {
    return num
        .toString()
        .split('')
        .reduce((sum, d) => sum + (d * d), 0);
}
}