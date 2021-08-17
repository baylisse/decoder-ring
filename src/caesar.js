// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25 || shift === 0) { 
      return false; 
    }
    if (encode === false) {
        shift = shift * (-1);
    };
    input = input.toLowerCase();
    let decodedMessage = "";  
    for (let letter in input) {
        let char = input.charCodeAt(letter);
        if (char >= 97 && char <= 122) {
          let newLetter = char + shift
          if (newLetter > 122) {
            char = 96 + ((char + shift) - 122);
            decodedMessage += String.fromCharCode(char);
          } else {
            if (newLetter < 97) {
                char = 122 - (96 - (char + shift));
                decodedMessage += String.fromCharCode(char);
            } else {
                decodedMessage += String.fromCharCode(newLetter);
            }
          }
        } else {
          decodedMessage += input[letter];
        };
    };
  return decodedMessage;
};

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
