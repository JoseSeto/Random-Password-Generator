// Assignment code here
function generatePassword(){
  //Select criteria (Function?)
  //Character limit 8-128
  //Include lowercase, uppercase, numeric, and/or special characters
  //validation
  //Generate
  //Write to prompt or page
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
