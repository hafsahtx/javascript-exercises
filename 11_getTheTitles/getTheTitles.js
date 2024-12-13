const getTheTitles = function(array) {
    let check = [];
    for(let i=0; i<array.length; i++){
        check.push(array[i].title);
    }
    return check;

};

// Do not edit below this line
module.exports = getTheTitles;
