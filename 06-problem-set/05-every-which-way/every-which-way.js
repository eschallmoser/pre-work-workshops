// Write a function `everyWhichWay` that accepts three number arguments. `everyWhichWay`
// should:

//   - return 'sum' if the sum of the first two numbers equals the third
//   - return 'difference' if the first number minus the second equals the third
//   - return 'product' if the product of the first two numbers equals the third
//   - return 'fraction' if the first number divided by the second equals the third
//   - return null if none of the above are true

// YOUR CODE BELOW

const everyWhichWay = (num1, num2, num3) => {
  if (num1 + num2 === num3) return "sum";
  if (num1 - num2 === num3) return "difference";
  if (num1 * num2 === num3) return "product";
  if (num1 / num2 === num3) return "fraction";
  return null;
};
