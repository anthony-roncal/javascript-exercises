const convertToCelsius = function(temp) {
  if (((temp - 32) * 5 / 9) === 0) {
    return 0;
  }
  else {
    return +((temp - 32) * 5 / 9).toFixed(1);
  }
};

const convertToFahrenheit = function(temp) {
  if (((temp * 9/5) + 32) === 0) {
    return 0;
  }
  else {
    return +((temp * 9/5) + 32).toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
