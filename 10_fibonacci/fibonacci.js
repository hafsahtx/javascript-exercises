const fibonacci = function(number) {
    let array = [1,1];
    if(number==0){
        return 0;
    }else if(number<0){
        return "OOPS";
    }
    for(let i=1; i<number-1; i++){
        let value= array[i]+array[i-1];
        array.push(value);
    }
    return array[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
