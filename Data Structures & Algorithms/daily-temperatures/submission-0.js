class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = []; // indices of days still waiting for a warmer day

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
                const prev = stack.pop();
                result[prev] = i - prev;
            }
            stack.push(i);
        }
        return result;
    }
}
