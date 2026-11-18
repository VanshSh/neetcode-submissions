class TimeMap {
    constructor() {
        this.keyStore = new Map(); // key -> [[timestamp, value], ...]
    }

    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) this.keyStore.set(key, []);
        this.keyStore.get(key).push([timestamp, value]);
    }

    get(key, timestamp) {
        const list = this.keyStore.get(key);
        if (!list) return "";

        let lo = 0,
            hi = list.length - 1;
        let res = "";

        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2)
            if (list[mid][0] <= timestamp) {
                res = list[mid][1]; // valid candidate, look for a later one
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return res;
    }
}
