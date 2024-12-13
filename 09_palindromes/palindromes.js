const palindromes = function (x) {
    word = x.replace(/[.,!]/g,"").toLowerCase()
    word = word.replace(/\s/g, '');
    let reverseWord = word.split("").reverse().join("");
    return reverseWord==word;

};

// Do not edit below this line
module.exports = palindromes;
