const convertToCelsius = function(temp) {
  let celcius = (temp-32) *(5/9);
  if(!Number.isInteger(celcius)){
    return parseFloat(celcius.toFixed(1));
  }else{
    return celcius;
}
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp*(9/5)) + 32;
  if(!Number.isInteger(fahrenheit)){
    return parseFloat(fahrenheit.toFixed(1));
}else{
    return fahrenheit;
}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
