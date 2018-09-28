import Set from "../src/Set";

describe('basic_set', () => {
    let set = new Set([5, 6, 8, 9, 2, 1, 0]);

    test('amount', function () {
        expect(set.getAmount()).toBe(31)
    });
    test('length', function () {
        expect(set.getLength()).toBe(7)
    });
    test('average', function () {
       expect(set.getAverage()).toBeCloseTo(4.4285714285714)
    })
});