// YOUR CODE BELOW

const myMnemonic = (...words) => {
  let newString = "";
  for (i = 0; i < words.length; i++) {
    if (words[i]) {
      newString += words[i][0];
    }
  }
  return newString;
};
