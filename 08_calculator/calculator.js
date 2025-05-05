const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
  return numbers
          .reduce((total,current)=>total+=current,0);
};

const multiply = function(numbers) {
  return numbers
          .reduce((total,current)=>total*=current,1)
};

const power = function(number, power) {
  return Math.pow(number,power);
};

const factorial = function(number) {
  return (number==0||number==1) ? 1 : number*factorial(number-1);
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
