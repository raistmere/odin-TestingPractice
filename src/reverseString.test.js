const reverseString = require("./reverseString");

test("Reverse string", () => {
    expect(reverseString("dog")).toBe("god");
});