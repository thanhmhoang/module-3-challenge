// Assignment Code
var generateBtn = document.querySelector("#generate");



// Declare global variables
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numVal = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-", "_","=","+","?",".","/", "\\",":","{","}","[","]","`","~"];
// Function for gather user password criteria
function characterTypes(){
  // variable to gain user password length preference as an integer
  var pwdLength = parseInt(prompt("Please enter a numerial value between 8 and 128 to specify password character length."));
  console.log(pwdLength)

  if (Number.isNaN(pwdLength) && pwdLength < 8 && pwdLength > 128) {
    alert("Please try again, input must be a number between 8 and 128.");
    console.log(pwdLength)
    return null
  }
// Prompt to see if user wants lowercase letters in password
  var hasLowerCase = confirm(
    "Please click OK to confirm that you would like lowercase letters in your password, otherwise click CANCEL."
  );
  // Prompt to see if user wants uppercase letters in password 
  var hasUpperCase = confirm(
    "Please click OK to confirm that you would like uppercase letters in your password, otherwise click CANCEL."
  );
   // Prompt to see if user wants numbers in password 
  var hasNumVal = confirm(
    "Please click OK to confirm that you would like numbers in your password, otherwise click CANCEL."
  );
  // Prompt to see if user wants special characters in password 
  var hasSpecialChar = confirm(
    "Please click OK to confirm that you would like special characters letters in your password, otherwise click CANCEL."
  );
//  Setting condition for if user says no to all character types
  if(
    hasLowerCase === false && 
    hasUpperCase === false &&
    hasNumVal === false &&
    hasSpecialChar === false 
  ) {
    alert("Must select at least one character type.")
    return null
  }
  // Setting variables for generating password function
  var passwordOptions = {
    length:pwdLength,
    hasLowerCase:hasLowerCase,
    hasUpperCase:hasUpperCase,
    hasNumVal:hasNumVal,
    hasSpecialChar:hasSpecialChar
  }
  return passwordOptions
}
// Randomizing array to be an numerial value and rounded to nearest whole number
function random(array) {
  var i = Math.floor(Math.random()* array.length)
  var e = array[i]
  return e
}
// Funaction to generate password
function generatePassword() {
  var options = characterTypes()
  var results = []
  var possibleChar = []
  var guaranteeChar = []
  if (options.hasLowerCase) {
    possibleChar = possibleChar.concat(lowerCase)
    // Sets it that password includes values from every criteria user chooses
    guaranteeChar.push(random(lowerCase))
  }
  if (options.hasUpperCase) {
    possibleChar = possibleChar.concat(upperCase)
    guaranteeChar.push(random(upperCase))
  }
  if (options.hasNumVal) {
    possibleChar = possibleChar.concat(numVal)
    guaranteeChar.push(random(numVal))
  }
  if (options.hasSpecialChar) {
    possibleChar = possibleChar.concat(specialChar)
    guaranteeChar.push(random(specialChar))
  }
for (var i = 0; i < options.length; i++) {
  var char = random(possibleChar)
  results.push(char)
}
for (var i = 0; i < guaranteeChar.length; i++) {
  results[i] = guaranteeChar[i]
}
// Turns/joins array into string
return results.join('')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
