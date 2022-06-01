//Global Variables


//Length of password, set at placeholder value
var passwordLength = 8;

// Placeholder value that contains the chosen characters available for the password 
var characterChoices = [];

// Possible characters for password
var specialCharacters = [  '@', '%', '+', '\\', '/',  "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

// Function that will allow the user to set out the password size, and characters they would like to use
function passwordOptions (){

  characterChoices=[];

  // Prompt shows allowing user to enter there password length 
  passwordLength = (prompt("How long do you want your  password? (8-128 characters"));

  // if invalid password length is entered, alert will show
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid Answer, enter a number between 8 - 128")
    return false;
  }

  //Prompt asking if user wants lowercase character in their password
  if (confirm("Lowercase Letters?")) {
      characterChoices = characterChoices.concat(lowerCaseCharacters);
  }
  //Prompt asking if user wants uppercase character in their password  
  if (confirm("Uppercase Letters?")) {
    characterChoices = characterChoices.concat(upperCaseCharacters);
  }
  //Prompt asking if user wants special character in their password  
  if (confirm("Special characters?")) {
    characterChoices = characterChoices.concat(specialCharacters);
  }
  //Prompt asking if user wants numbers in their password
  if (confirm("Numbers?")) {
    characterChoices = characterChoices.concat(numbers);
  }

  return true;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  //
    var passwordSelection = passwordOptions();
    var passwordText = document.querySelector("#password");
// If/else that ensures that prompts have been input satisfactorily
  if (passwordSelection) {
  var newpassword = generatePassword();
  passwordText.value = newpassword;
  } else {
    passwordText.value = "";
  }

}


function generatePassword() {

  password = "";

// for loop will continue for the number of password length
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characterChoices.length)
    password = password + characterChoices[randomNumber];
  }

  return password;

}

//Copy function added for easy use of password

function copyPassword() {

  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Password copied")
  
}