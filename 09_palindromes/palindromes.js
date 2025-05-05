const palindromes = function (x) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";
    const word = x
                    .toLowerCase()
                    .split("")
                    .filter(letter=>alphanumerical.includes(letter))
                    .join("");

    const reverseWord = word.split("").reverse().join("");
    return reverseWord==word;

};

// Do not edit below this line
module.exports = palindromes;
