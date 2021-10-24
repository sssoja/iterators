/* We sometimes want to find the location of an element in an array. 
That’s where the .findIndex() method comes in! Calling .findIndex() 
on an array will return the index of the first element that evaluates 
to true in the callback function. */

/* If there isn’t a single element in the array that satisfies the 
condition in the callback, then .findIndex() will return -1. */

const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex(animal => animal === "elephant");

// We can also define the callback function beforehand.
const findElephant = animal => animal === "elephant";
const foundAnimal = animals.findIndex(findElephant);

const startsWithS = animals.findIndex(animal => animal[0] === "s");

// We can also define the callback function beforehand.
const findS = animal => animal[0] === "s";
const startsWithS = animals.findIndex(findS);
