/* .forEach() takes an argument of callback function. 
Remember, a callback function is a function passed 
as an argument into another function. */

/* .forEach() loops through the array and executes the 
callback function for each element. During each execution, 
the current element is passed as an argument to the callback function.*/

/* The return value for .forEach() will always be undefined. */

const fruits = ["mango", "papaya", "pineapple", "apple"];

fruits.forEach(function (fruit) {
  console.log("I want to eat a " + fruit);
});

// Another way to pass a callback for .forEach() is to use arrow function syntax.
fruits.forEach(fruit => console.log(fruit));

// We can also define a function declaration beforehand to be used as the callback function.
function logFruit(str) {
  console.log("I want to eat a " + str);
}

fruits.forEach(logFruit);

// You can also use a function expression or arrow function as well.
const logFruit = str => console.log("I want to eat a " + str);

fruits.forEach(logFruit);
