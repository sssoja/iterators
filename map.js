/* When .map() is called on an array, 
it takes an argument of a callback function and 
returns a new array! */

/* .map() works in a similar manner to .forEach()— 
the major difference is that .map() returns a new array. */

/* .map() will iterate through each element in the array 
and pass the element into the callback function. */

/* The code block after the return is the code we wish 
to execute upon each element in the array. 
This will save each value executed upon from the array 
to a new array. */

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(""));

// We can also define the callback function beforehand.
const getFirstLetter = animal => animal[0];
const secretMessage = animals.map(getFirstLetter);
console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num / 100);
console.log(smallNumbers.join(""));

// We can also define the callback function beforehand.
const divide = num => num / 100;
const smallNumbers = bigNumbers.map(divide);
console.log(smallNumbers.join(""));
