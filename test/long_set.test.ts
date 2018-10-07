import Set from "../src/Set";

describe('long_set', () => {
    let set = new Set([58,
        59,
        61,
        62,
        62,
        63,
        63,
        65,
        66,
        66,
        68,
        68,
        69,
        69,
        70,
        70,
        70,
        70,
        70,
        71,
        71,
        71,
        71,
        71,
        72,
        72,
        72,
        72,
        73,
        73,
        73,
        73,
        73,
        73,
        74,
        74,
        74,
        74,
        74,
        74,
        74,
        74,
        74,
        75,
        75,
        75,
        75,
        75,
        75,
        76,
        76,
        76,
        76,
        76,
        76,
        76,
        76,
        77,
        77,
        77,
        77,
        77,
        78,
        78,
        78,
        78,
        78,
        78,
        79,
        79,
        79,
        79,
        79,
        79,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        81,
        81,
        81,
        81,
        81,
        81,
        82,
        82,
        82,
        82,
        83,
        83,
        83,
        84,
        85,
        85,
        86,
        91,
        91]);

    test('amount', function () {
        expect(set.getAmount()).toBe(7526)
    });
    test('length', function () {
        expect(set.getLength()).toBe(100)
    });
    test('average', function () {
        expect(set.getAverage()).toBeCloseTo(75.26)
    });
    test('min', function () {
        expect(set.getMin()).toBe(58)
    });
    test('max', function () {
        expect(set.getMax()).toBe(91)
    });
    test('first_quartile', function () {
        expect(set.getFirstQuartile()).toBe(set.getItems()[24])
    });
    test('median', function () {
        expect(set.getMedian()).toBe(set.getItems()[49])
    });
    test('third_quartile', function () {
        expect(set.getThirdQuartile()).toBe(set.getItems()[74])
    })
});