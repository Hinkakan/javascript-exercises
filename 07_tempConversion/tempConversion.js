const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit-32)/1.8
  roundedCelsius = parseFloat(celsius.toFixed(1))

  return roundedCelsius
};

const convertToFahrenheit = function(celsius) {
  console.log(celsius);
  fahrenheit = (celsius*1.8)+32
  console.log(fahrenheit);
  roundedFahrenheit = parseFloat(fahrenheit.toFixed(1))

  return roundedFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
