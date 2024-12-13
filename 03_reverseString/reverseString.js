const reverseString = function(word) {
    const array = word.split("");
    const reversed = array.reverse();
    let reverse = reversed.join("");;
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
