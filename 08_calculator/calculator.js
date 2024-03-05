const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	let sum = 0;

  for (i=0;i<arr.length;i++) {
    sum = sum + arr[i];
  }

  return sum;
};

const multiply = function(arr) {
  let product = arr[0];

  for (i=1;i<arr.length;i++) {
    product = product * arr[i];
  }

  return product;
};

const power = function(num, pwr) {
	return num ** pwr;
};

const factorial = function(num) {
	let factorial = 1;

  for (i=2;i<=num;i++) {
    factorial = factorial * i;  
  }

  return factorial;
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
