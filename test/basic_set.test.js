"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
describe('sum', function () {
    it('should work', function () {
        expect(src_1.default(5, 6)).toBe(11);
    });
});
test('hello world', function () {
    expect(2 + 2).toBe(4);
});
