// Define a function `lastCharacter` that accepts two strings as arguments.
// `lastCharacter` should return true if both strings end with the same character.
// Otherwise, `lastCharacter` should return false.

// ```javascript
// lastCharacter('apples', 'pumpkins'); // => true

// lastCharacter('marker', 'pen'); // => false

// YOUR CODE BELOW

const lastCharacter = (stringOne, stringTwo) => {
  if (stringOne[stringOne.length - 1] === stringTwo[stringTwo.length - 1]) {
    return true;
  }
  return false;
};
