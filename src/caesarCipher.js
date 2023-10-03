const caesarCipher = (() => {

    const alphabet = 
    [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "X", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    // This method handles encrypting a message
    // message = the message the user wants to encrypt
    // cipherShift = the amount of letters they want to shift for each letter in the message
    const encrypt = (message, cipherShift) => {
        // This variable will hold the new encrypted message
        let encryptMsg = "";

        // Check to see if cipherShift was provided. If not, then set the shift to default of: 1 letter shift.
        cipherShift = (cipherShift === null? 1 : cipherShift);
        
        // Loop through message and create a new encrypted message.
        for (let i = 0; i < message.length; i++) 
        {
            // Find the index position in the alphabet array
            let letterIndex = findLetter(message[i])
            if(letterIndex > -1)
            {
                // Shift the index by cipherShift amount to encrypt it.
                // Make sure to apply wrapping when needed. (Z + 1 shift = A) (Using modulo)
                letterIndex = (letterIndex + cipherShift) % alphabet.length;
                // Get new shifted letter and make sure to check for case sensitive letters.
                let newLetter = (message[i] === message[i].toUpperCase()? alphabet[letterIndex] : alphabet[letterIndex].toLowerCase());
                // Add the new shifted letter to the encrypted message
                encryptMsg = encryptMsg.concat(newLetter);
            }
            else
            {
                // Add the punctuation/number to the encrypted message without any shift 
                // (because only letters shift at the moment)
                encryptMsg = encryptMsg.concat(message[i]);
            }
        }

        // Return the encrypted message back
        console.log(`Encrypted Message = ${encryptMsg}`);
        return encryptMsg;
    }

    // This method handles decrypting a message
    const decrypt = (cipher) => {
        let decryptMsg = "abc";



        return decryptMsg
    }

    // This function returns the index of the letter by searching alphabet array.
    function findLetter(letter)
    {
        // Alphabet is full upper case so we want to make sure that the letter is also upper case
        // when searching for it inside the alphabet array.
        return alphabet.findIndex((element) => element === letter.toUpperCase());
    }

    return { encrypt, decrypt };
})();

module.exports = caesarCipher;