import Set from "../src/Set";

describe('complex_set', () => {
    let set = new Set([
        6,
        13,
        154,
        12,
        48,
        73,
        61,
        2,
        36,
        25,
        15,
        42,
        36,
        91,
        25,
        20
    ]);
    test('first_decile', function () {
        expect(set.getFirstDecile()).toBe(6)
    });
    test('ninth_decile', function () {
        expect(set.getNinthDecile()).toBe(91)
    });
    test('length', function () {
        expect(set.getLength()).toBe(16)
    });
    test('sort', function () {
        set.sortAscending();
        expect(set.getItems()[0]).toBe(2);
        expect(set.getItems()[1]).toBe(6)
    });
    test('min', function () {
        expect(set.getMin()).toBe(2)
    });
    test('max', function () {
        expect(set.getMax()).toBe(154)
    });
    test('first_quartile', function () {
        expect(set.getFirstQuartile()).toBe(14)
    });
    test('median', function () {
        expect(set.getMedian()).toBe(30.5)
    });
    test('third_quartile', function () {
        expect(set.getThirdQuartile()).toBe(54.5)
    });
    test('average', function () {
        expect(set.getAverage()).toBeCloseTo(41.1875)
    });
});