import Set from "../src/Set";

describe('basic_set', () => {
    let set = new Set([5, 6, 8, 9, 2, 1, 0]);

    test('amount', function () {
        expect(set.getAmount()).toBe(31)
    });
    test('length', function () {
        expect(set.getLength()).toBe(7)
    });
    test('min', function () {
        expect(set.getMin()).toBe(0)
    });
    test('max', function () {
        expect(set.getMax()).toBe(9)
    });
    test('first_quartile', function () {
        expect(set.getFirstQuartile()).toBe(1)
    });
    test('third_quartile', function () {
        expect(set.getThirdQuartile()).toBe(8)
    });
    test('median', function () {
        expect(set.getMedian()).toBe(5)
    });
    test('average', function () {
       expect(set.getAverage()).toBeCloseTo(4.4285714285714)
    });
    test('averageValuesSquare', function () {
        expect(set.getAverageValuesSquare()).toBe(211)
    });
    test('variance', function () {
        expect(set.getVariance()).toBeCloseTo(10.5306)
    });
    test('standardDeviation', function () {
        expect(set.getStandardDeviation()).toBeCloseTo(3.24508859663338)
    });
});