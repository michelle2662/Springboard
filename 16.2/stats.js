// stats.js

function mean(nums) {
    return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function median(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
}

function mode(nums) {
    const freq = {};
    let maxFreq = 0;

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, freq[num]);
    }

    const modes = Object.keys(freq)
        .filter(k => freq[k] == maxFreq)
        .map(Number);

    return modes.length === 1 ? modes[0] : modes;
}

module.exports = { mean, median, mode };
