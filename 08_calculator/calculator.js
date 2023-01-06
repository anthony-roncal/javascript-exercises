const add = function() {
  const initial = 0;
	const sum = Array.from(arguments).reduce((sum, number) => sum + number, initial);
  return sum;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(array) {
	const initial = 0;
  const sum = array.reduce((acc, number) => acc + number, initial);
  return sum;
};

const multiply = function(array) {
  const initial = 1;
  const product = array.reduce((acc, number) => acc * number, initial);
  return product;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  return (a > 1) ? a * factorial(a-1) : 1;
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
