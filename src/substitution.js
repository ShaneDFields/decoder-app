const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    if (Array.from(new Set(alphabet)).length !== 26) return false;
    let abc = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");
    input = input.toLowerCase();
    let map = {};
    let decode = {};
    let result = "";
    abc.split("").forEach((letter, index) => {
      map[letter] = alphabet[index];
      decode[alphabet[index]] = letter;
    });
    if (!encode) map = decode;
    input.split("").forEach((input) => {
      result += input === " " ? " " : map[input];
    });
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
