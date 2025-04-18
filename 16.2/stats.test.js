// stats.test.js
const { mean, median, mode } = require('./stats');

describe("Statistics Functions", () => {
    test("mean of [1, 2, 3, 4, 5] is 3", () => {
        expect(mean([1, 2, 3, 4, 5])).toBe(3);
    });

    test("median of [1, 3, 2, 4, 5] is 3", () => {
        expect(median([1, 3, 2, 4, 5])).toBe(3);
    });

    test("median of [1, 2, 3, 4] is 2.5", () => {
        expect(median([1, 2, 3, 4])).toBe(2.5);
    });

    test("mode of [1, 2, 2, 3, 3] is [2, 3]", () => {
        expect(mode([1, 2, 2, 3, 3])).toEqual([2, 3]);
    });

    test("mode of [1, 1, 2, 3] is 1", () => {
        expect(mode([1, 1, 2, 3])).toBe(1);
    });
});
