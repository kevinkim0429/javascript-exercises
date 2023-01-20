const convertToCelsius = function(value1) {
  let result = ((value1 - 32) * (5 / 9));

  if (result < 0) {
    result *= -1
    let rounded = Math.round(result * 10) / 10
    rounded *= -1
    return rounded
  } else {
    let rounded = Math.round(result * 10) / 10
    return rounded
  }
};

const convertToFahrenheit = function(value1) {
  let result = (((9 / 5) * value1) + 32)

  if (result < 0) {
    result *= -1
    let rounded = Math.round(result * 10) / 10
    rounded *= -1
    return rounded
  } else {
    let rounded = Math.round(result * 10) / 10
    return rounded
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
