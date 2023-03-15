// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const normalAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
    let output = ''
    if(!alphabet) return false 
    if(!(alphabet.length == 26)) return false 
    for(let letter in alphabet){
      let count = 0
      for(let i = 0; i < 26; i++){
        if(alphabet[letter] == alphabet[i]) count++
      }
      if(count > 1) return false 
    }
    if(encode){
      let prior = input.toLowerCase()
      for(let letter in prior){
        if(!alphabet.includes(prior[letter])) output += prior[letter]
        else{
          const alphabetIndex = normalAlphabet.indexOf(prior[letter])
          output += alphabet[alphabetIndex]
        }
      }
      return output      
    }
    else {
      let before = input.toLowerCase()
      for(let letter in before){
        if(!alphabet.includes(before[letter])) output += before[letter]
        else{
          const alphabetIndex = alphabet.indexOf(before[letter])
          output += normalAlphabet[alphabetIndex]
        }
      }
      return output
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
