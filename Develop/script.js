//Global Variables

var passwordLength = 8;
var characterChoices = [];

// Possible characters for password
var specialCharacters = [  '@', '%', '+', '\\', '/',  "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

function passwordOptions (){

  characterChoices=[];

  passwordLength = (prompt("How long do you want your  password? (8-128 characters"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid Answer, enter a number between 8 - 128")
    return false;
  }


  if (confirm("Lowercase Letters?")) {
      characterChoices = characterChoices.concat(lowerCaseCharacters);
  }

  if (confirm("Uppercase Letters?")) {
    characterChoices = characterChoices.concat(upperCaseCharacters);
  }
  if (confirm("Special characters?")) {
    characterChoices = characterChoices.concat(specialCharacters);
  }

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
    var passwordSelection = passwordOptions();
    var passwordText = document.querySelector("#password");

  if (passwordSelection) {
  var newpassword = generatePassword();
  passwordText.value = newpassword;
  } else {
    passwordText.value = "";
  }

}


function generatePassword() {

  password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characterChoices.length)
    password = password + characterChoices[randomNumber];
  }

  return password;

}

function copyPassword() {

  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Password copied")
  
}