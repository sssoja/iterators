/* The .reduce() method returns a single value after 
iterating through the elements of an array, 
thereby reducing the array. */

/* .reduce() calls the .reduce() method on the numbers array 
and takes in a callback function as argument. */

/* As .reduce() iterates through the array, 
he return value of the callback function becomes 
the accumulator value for the next iteration, 
currentValue takes on the value of the current 
element in the looping process.
*/

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function (accumulator, currentValue) {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
});

console.log(newSum);

// Can also be written using arrow syntax
const newSum = newNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

/* We can add a second argument to .reduce(). 
The second argument acts as an initial value for the accumulator.
So instead of starting with the first value we can start the accumulator with another value.
Note. it doesn't have to be a number! */

const newSum = newNumbers.reduce(function (accumulator, currentValue) {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

// Can also be written using arrow syntax
const newSum = newNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10
);
