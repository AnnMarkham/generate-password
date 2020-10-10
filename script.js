// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//prompt length
function generatePassword() {
  var size = prompt("Password Length:  Please enter a number between 8 and 128.");
  size = Number.parseInt(size, 10);
  //if size is NaN the return an error
  if (Number.isNaN(size)) {
    alert("Invalid format, please select a number between 8 & 128.");
    return "";
  }
  if (size < 8 || size > 128) {
    alert("Invalid length.  Please select a number between 8 and 128.");
    return "";
  };

  // alert - click ok for at least one of the next 4 options //
  alert("you must select at least on of the following character types");

  var lower = confirm("Click OK to include lowercase letters?");

  var upper = confirm("Click OK to include  uppercase letters?");

  var number = confirm("Click OK to include numbers?");

  var symbol = confirm("Click OK to include symbols?");

  //verify that at least one of these is true. 
  if (!lower && !upper && !number && !symbol) {
    alert("Please select at least one character type by clicking ok when prompted to choose: lowercase letters, uppercase letters, numbers or symbols. ");
    return "";
  }

  //set of valid choices for each type 
  var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "]", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var allSymbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", ".", ",", "<", ">", "/", "?", "[", "]", "{", "}", "|", "'",];


  //while loop choose randomly from the set of valid characters (if the character type was selected) and repeats until required length is reached. 
  debugger;

  var generated = ""


  while (generated.length < size) {



    //if lower choose randomly from allLower
    if (lower) {
      var lowerIndex = Math.floor(Math.random() * allLower.length);
      generated = generated + allLower[lowerIndex];
      if (generated.length === size) {
        continue;
      }
    }

    //if upper choose randomly from allUpper
    if (upper) {
      var upperIndex = Math.floor(Math.random() * allUpper.length);
      generated = generated + allUpper[upperIndex];
      if (generated.length === size) {
        continue;
      }
    }

    //if symbol choose randomly from allsymbol
    if (symbol) {
      var symbolIndex = Math.floor(Math.random() * allSymbols.length);
      generated = generated + allSymbols[symbolIndex];
      if (generated.length === size) {
        continue;
      }
    }

    //if number choose randomly from allNumbers --  
    if (number) {
      var numberIndex = Math.floor(Math.random() * allNumbers.length);
      generated = generated + allNumbers[numberIndex];
      if (generated.length === size) {
        continue;
      }

    }
  }

  return generated;

  // verify there is at least one character for each chosen type and that there are not character types for types not chosen
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);