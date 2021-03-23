const getValue = require('./getValue');

test("getValue returns proper values on valid input", () => {
    const expectedResult = [1, 1, 2, 3, 5, 8, 13, 21, 34];

    expect([...Array(expectedResult.length).keys()].map(n => getValue(n + 1)))
        .toStrictEqual(expectedResult);
});

test("getValue throws RangeError on n < 1", () => {
    expect(() => { getValue(0) })
        .toThrow(new RangeError('Argument must be >= 1'));
});

test("getValue for a large num returns Infinity", () => {
    expect(Infinity).toStrictEqual(getValue(1477));
});
