const analyzeArray = require("./analyzeArray.js");

test("Analyzing Array test", () => {
    expect(analyzeArray.calculate([1,2,3,4,5,6]))
    .toStrictEqual
    (
        {
            average: 3.5,
            min: 1,
            max: 6,
            length: 6
        }
    )
});