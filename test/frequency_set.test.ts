import Set from "../src/Set";

describe('frequency_set', () => {
    let set = Set.fromFrequencySet([
        [1,5],
        [6,2],
        [7,8]
    ]);

    test('amount', function () {
        expect(set.getAmount()).toBe(73)
    });
    test('length', function () {
        expect(set.getLength()).toBe(15)
    });
    test('average', function () {
       expect(set.getAverage()).toBeCloseTo(4.8666666666667)
    });
    test('items', function () {
        expect(set.getItems()).toEqual([1,1,1,1,1,6,6,7,7,7,7,7,7,7,7])
    })
});