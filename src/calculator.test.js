const calculator = require("./calculator.js");

test("Calculator: add, subtract, divide, multiply", () =>
{
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.sub(1, 1)).toBe(0);
    expect(calculator.div(4, 2)).toBe(2);
    expect(calculator.mul(3, 3)).toBe(9);
});