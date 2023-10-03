const caesarCipher = require("./caesarCipher.js");

test("Cipher shift by 1", () => {
    expect(caesarCipher.encrypt("Hello!", 2)).toBe("Jgnnq!");
    // expect(caesarCipher.decrypt("bcd")).toBe("abc");
});