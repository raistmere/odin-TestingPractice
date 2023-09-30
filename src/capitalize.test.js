const capitalize = require('./capitalize');

test("First letter capitalized", () => 
{
    expect(capitalize("food")).toBe("Food");
});