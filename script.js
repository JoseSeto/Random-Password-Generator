// Assignment code here

//object to hold characters to be used in generation
var options = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
}

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
  const result = "";
  var characterCount = prompt("Set a character count from anywhere between 8 to 128.")

  var charQty = parseInt(characterCount);
  if(charQty > 7 && charQty < 129){
    var lowerCase = confirm("Would you like to include lowercase letters?")
    var upperCase = confirm("Would you like to include uppercase letters?")
    var numerics = confirm("Would you like to include numbers?")
    var symbols = confirm("Would you like to include symbols?")
  }
  else{
    alert("Please set password length between 8 to 128.")
  }
}
function getRandomLower() {
  
}
function getRandomNumber() {
  
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}