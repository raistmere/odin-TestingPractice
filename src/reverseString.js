function reverseString(str)
{
    let newWord = "";
    for (let i = (str.length - 1); i >= 0; i--) 
    {
        newWord = newWord.concat(str[i]);
    }

    return newWord;
}

module.exports = reverseString;