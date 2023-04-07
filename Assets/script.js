// Assignment code here
// Array setup for uppercase letters
const upperCase = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetUpper = upperCase.map((x) => String.fromCharCode(x));
// Array setup for lowercase letters
const lowerCase = Array.from(Array(26)).map((e, i) => i + 97);
const alphabetLower = lowerCase.map((x) => String.fromCharCode(x));
// Array setup for numbers
const numeric = Array.from(Array(10)).map((e, i) => i + 48);
const numericArray = numeric.map((x) => String.fromCharCode(x));
// Array setup for symbols
const symbols = Array.from(Array(15)).map((e, i) => i + 33);
const symbolsArray = symbols.map((x) => String.fromCharCode(x));

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Main generation functiion
function generatePassword(){
  var result = "";
  var characterCount = prompt("Set a character count from anywhere between 8 to 128.")

  var charQty = parseInt(characterCount);
  // Checks if the character count parameter is met, if it is, it proceeds into user selection, if not, it re-prompts for character count.
  if(charQty > 7 && charQty < 129){
    var lowerCase = confirm("Would you like to include lowercase letters?")
    var upperCase = confirm("Would you like to include uppercase letters?")
    var numerics = confirm("Would you like to include numbers?")
    var symbols = confirm("Would you like to include symbols?")
  }
  else{
    alert("Please set password length between 8 to 128.")
    return generatePassword();
  }

  var pool = [];
  // Checks if user selected uppercase letters to be included
  if (upperCase == true) pool.push(...alphabetUpper);
  // Checks if user selected lowercase letters to be included
  if (lowerCase == true) pool.push(...alphabetLower);
  // Checks if user selected numbers to be included
  if (numerics == true) pool.push(...numericArray);
  // Checks if user slected symbols to be included
  if (symbols == true) pool.push(...symbolsArray);

  // With user selections in place, loop will run through each selection and randomly choose characters base off of character count chosen.
  if (lowerCase || upperCase || numerics || specChar) {
    for (var i = 0; i < charQty; i++) {
      result += pool[Math.floor(Math.random() * pool.length)];
    }
  } else {
    window.alert(
      "A minimum of one variable must be selected to generate a password."
    );
    return generatePassword();
  }
  return result;

}