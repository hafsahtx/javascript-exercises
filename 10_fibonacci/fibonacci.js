const fibonacci = function(number) {
    const n = parseInt(number); //index = 3
    let array = [0,1];
    if(n<0) return "OOPS";
    if(n===0) return 0;
    //0[0] 1[1] 1[2] 2[3] 3[4] 5[5] 8[6] 13[7] 21[8]
    for(let i=2; i<=n; i++){
        array.push(array[i-2]+array[i-1]);
    }
    return array[n];
};

// Do not edit below this line
module.exports = fibonacci;
