const add = function(...numbers) {
  let addition = 0;
  if(!numbers){
     return addition;
  }else{
    for(let x of numbers){
      addition+=x;
      
    }
    return addition;
  }
};

const subtract = function(...numbers) {
	if(!numbers){
    return addition;}
  else{
    substraction = numbers[0];
    const arr = [];
    for(let i=1; i<numbers.length;i++){
      substraction-=numbers[i];
    }
    return substraction;
  }
};

const sum = function(numbers) {
  let summation = 0;
  if(numbers.length == 0){
     return summation;
  }else{
    for(let x of numbers){
      summation+=x;
      
    }
    return summation;
  }

	
};

const multiply = function(numbers) {
  let multiplication = 0;
  if(numbers.length==0){
    return multiplication;}
  else{
    multiplication = numbers[0];
    const arr = [];
    for(let i=1; i<numbers.length;i++){
      multiplication*=numbers[i];
    }
    return multiplication;
  }
};

const power = function(number, power) {
  return number**power;
};

const factorial = function(number) {
  if(number==0 || number==1){
    return 1;
  }
  return number * factorial(number-1); 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
