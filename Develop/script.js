
var lowerCase = false;
var upperCase = false;
var number    = false;
var symbol    = false;

function generatePassword () {

var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar    = "0123456789";
var symbolChar    = " !\"#$%&()*+-./:;<>=?@[]^_`{}|~'\\";
var includedChar = "";
var length = 0;
var newPassword;

getCharType ();
  length = getPasswordLength ();


if (lowerCase == true) {
  includedChar += lowerCaseChar;
}

if (upperCase == true) {
  includedChar += upperCaseChar;
}

if (number == true) {
  includedChar += numberChar;
}

if (symbol == true) {
  includedChar += symbolChar;
}


newPassword=createPassword (length, includedChar);
return newPassword;
}

function createPassword (pwLength, trueChar) {
  var result           = "";
  var characters       = trueChar;
  var charactersLength = characters.length;
  for ( var i = 0; i < pwLength; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
  }
  return result;
}


function getCharType () {
  lowerCase = confirm("Do you want to include lower case letters? \n\n OK = Yes, Cancel = No");
  upperCase = confirm("Do you want to include upper case letters? \n\n OK = Yes, Cancel = No");
  number = confirm("Do you want to include numbers? \n\n OK = Yes, Cancel = No ");
  symbol = confirm("Do you want to include special characters? \n\n OK = Yes, Cancel = No");
    while ( lowerCase == false && upperCase == false && number == false && symbol == false) {
      alert ("YOU MUST CHOOSE AT LEAST ONE CHARACTER TYPE!");
        lowerCase = confirm("Do you want to include lower case letters? \n\n OK = Yes, Cancel = No");
        upperCase = confirm("Do you want to include upper case letters? \n\n OK = Yes, Cancel = No");
        number = confirm("Do you want to include numbers? \n\n OK = Yes, Cancel = No ");
        symbol = confirm("Do you want to include special characters? \n\n OK = Yes, Cancel = No");
    }
}


function getPasswordLength () {


var captureLength = prompt("How many characters would you like to include? Must be between 8 and 128");

  while ( captureLength <8 || captureLength >128 || isNaN (captureLength)) {
  
    captureLength = prompt("Attention!! Must be a number between 8 and 128");
  }
  return captureLength;
}


var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
