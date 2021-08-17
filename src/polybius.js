// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i/j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
    const cipherArray = [11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55, 65];
    const message = [];
    input.toLowerCase();
    if (encode) {
      for (let letter of input) {
        if (letter === " "){
          message.push(letter);
        } else {
            let index = 0
            if (letter === "i" || letter === "j") {
              index = 8;
            } else {
              index = alphabet.indexOf(letter);
            }
          message.push(cipherArray[index]);
        }
      }
    } else {
      let newInput = input.replace(" ", 65);
      if (newInput.length % 2 !== 0) {
        return false;
      }
      let inputArray = newInput.match(/..?/g);
      let newIndex = 0
      for (let pair of inputArray) {
        newIndex = cipherArray.indexOf(Number(pair));
        message.push(alphabet[newIndex]);
      }
    }
    return message.join("")
   }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
