const sumAll = function(start, end) {
    let temp;
    if(end<start){
        temp = start;
        start = end;
        end = temp;
    }
    if(start<0 || end<0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR";
    }else{
        let i=start; 
        let sum = 0;
        for(;i<=end; i++){
            sum+=i;
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
