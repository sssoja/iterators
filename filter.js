/* Like .map(), .filter() returns a new array. 

However, .filter() returns an array of elements after 
filtering out certain elements from the original array. 

The callback function for the .filter() method should return true or 
false depending on the element that is passed to it. 

The elements that cause the callback function to return true are 
added to the new array. */

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(num => num < 250);
console.log(smallNumbers);

// We can also define the callback function beforehand.
const findSmallNums = num => num < 250;

const smallNumbers = randomNumbers.filter(findSmallNums);
console.log(smallNumbers);

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

const longFavoriteWords = favoriteWords.filter(word => word.length > 7);
console.log(longFavoriteWords);

// We can also define the callback function beforehand.
const findLongWords = word => word.length > 7;

const longFavoriteWords = favoriteWords.filter(findLongWords);
console.log(longFavoriteWords);
