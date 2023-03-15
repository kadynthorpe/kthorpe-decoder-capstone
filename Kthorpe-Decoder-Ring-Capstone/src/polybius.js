// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  const polybiusKey = {
    horizontal: {
      '1': ['a','b','c','d','e'],
      '2': ['f', 'g', 'h', 'i', 'j', 'k'],
      '3': ['l', 'm', 'n', 'o', 'p'],
      '4': ['q', 'r', 's', 't', 'u'],
      '5': ['v', 'w', 'x', 'y', 'z']},
    vertical: {
      '1': ['a', 'f','l','q','v'],
      '2': ['b','g','m','r','w'],
      '3': ['c','h', 'n', 's', 'x'],
      '4': ['d', 'i', 'j', 'o', 't', 'y'],
      '5': ['e', 'k', 'p', 'u', 'z']}
  };
  
  //take a string and output string of numbers according to polybius square
  const encoder = input =>
    input
      .split("")
      .map(char => {
        if(char === " "){
          return " ";
        }
        else{
          const lowerChar = char.toLowerCase();
          for(let number in polybiusKey.horizontal){
            if(polybiusKey["horizontal"][number].includes(lowerChar)){
              for(let num in polybiusKey.vertical){
                if(polybiusKey["vertical"][num].includes(lowerChar)){
                  return num + number;
                };
              };
            };
          };
        };
      })
      .join("");

  const decoder = input => input
    .match(/\s|[1-5]{1,2}/g)
    .map(char => {
        if(char === " "){
           return " ";
        }
       else if(char === "42"){
            return "(i/j)";
       }
       else{
           const indID = char.split("");
           let findIndex = parseInt(indID[1]) -1;
           if(indID[0] === "4"){
               if(findIndex > 1){
                    findIndex += 1;
               }
                return polybiusKey.vertical[indID[0]][findIndex];
           }
            else{
                return polybiusKey.vertical[indID[0]][findIndex];
           };
       };})
    .join("");

  function polybius(input, encode = true) { //reads horizontal then vertical
    if(encode){
      return encoder(input);
    }
    else{
      if(input.split(" ").join("").length % 2 === 0){
        return decoder(input);
      }
      else{
        return false;
      };
    };
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };