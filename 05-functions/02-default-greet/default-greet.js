// YOUR CODE BELOW
// const defaultGreet = (firstName, lastName) => {
//   if (!lastName) {
//     lastName = "Doe";
//   }
//   return `Hi ${firstName} ${lastName}!`;
// };

const defaultGreet = (firstName, lastName = "Doe") =>
  `Hi ${firstName} ${lastName}!`;
