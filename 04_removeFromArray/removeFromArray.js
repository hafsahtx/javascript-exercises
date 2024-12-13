const removeFromArray = function(array, ...values) {
    const newArr = [];
    let check = true;
    for(let i=0; i<array.length; i++){
        for(let j=0; j<values.length; j++){
            if(array[i]===values[j]){
               check = false;
               break;
            }
            check = true;
        } 
        if(check){
            newArr.push(array[i]);

        }
    }
    console.log(`new arr ${newArr}`);
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
