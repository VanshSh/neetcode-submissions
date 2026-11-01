class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      // if(s?.length === t?.length){
    //    return s.split('').sort().join('') === t.split('').sort().join('') 
    // }
    // return false


    const mapping = {}
    if (s?.length === t?.length) {
        for (let i = 0; i < s.length; i++) {
            mapping[s[i]] = (mapping[s[i]] || 0) + 1;
            mapping[t[i]] = (mapping[t[i]] || 0) - 1;

        }

        return Object.values(mapping).every(e => e == 0)
    }
    return false
    }
}
