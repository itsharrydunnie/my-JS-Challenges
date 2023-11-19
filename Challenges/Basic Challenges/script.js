// Write a function that returns the larger of two numbers

const larger = function (num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is the largest number`);
  } else if (num2 > num1) {
    console.log(`${num2} is the larger number`);
  } else if ((num1 = num2)) {
    console.log(`They are both equal numbers`);
  }
};

const test = larger(23, 23);
console.log(test);
