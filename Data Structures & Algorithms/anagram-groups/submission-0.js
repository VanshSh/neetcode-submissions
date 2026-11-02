class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapping = {};

        for (let str of strs) {
            const key = str.split("").sort().join("");

            if (mapping[key]) {
                mapping[key].push(str);
            } else {
                mapping[key] = [str];
            }
        }

        return Object.values(mapping);
    }
}
