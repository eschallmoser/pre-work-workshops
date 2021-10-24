// Define a function `greeting` that accepts an optional string argument called
// name. `greeting` should return a personalized string if the name is present.

// ```javascript
// greeting('Sadie'); // => Hello Sadie!
// greeting(); // => Hello!

// YOUR CODE BELOW

const greeting = (name) => {
  if (name) {
    return `Hello ${name}!`;
  } else {
    return "Hello!";
  }
};
