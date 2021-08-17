// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const unscrambledAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (!alphabet || alphabet.length !== 26) return false;
    const scramAlphabetArr = alphabet.toLowerCase().split("");
    for (let char of scramAlphabetArr) {
      if(scramAlphabetArr.indexOf(char) !== scramAlphabetArr.lastIndexOf(char)) return false;
    }
    const message = []
    const inputArr = input.toLowerCase().split("")
    if(encode) {
      for (let char of inputArr) {
        if (!unscrambledAlphabet.includes(char)) {
          message.push(char);
        } else {
          let index = unscrambledAlphabet.indexOf(char);
          message.push(scramAlphabetArr[index]);
        }
      }
    } else {
      for (let char of inputArr) {
        if (!scramAlphabetArr.includes(char)) {
          message.push(char);
        }else {
          let index = scramAlphabetArr.indexOf(char);
          message.push(unscrambledAlphabet[index]);
        }
      }
    }
    return message.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
