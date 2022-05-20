// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var randomGenerate = Math.random()
  return Math.floor(min*(1 - randomGenerate) + randomGenerate*max)

}

function getRandomItem(options) {
  return options[randomInt(options.length)]
}

function generatePassword() {

  var userInput = window.prompt("Password Length? (8-128) characters.")

  var passwordLength = parseInt(userInput)
  
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number.")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters.")
    return
  }


  var userNumber = window.confirm ("Would you like numbers in your password?")
  var userSymbol = window.confirm ("Would you like symbols in your password?")
  var userLowercase = window.confirm ("Would you like lowercases in your password?")
  var userUppercase = window.confirm ("Would you like uppercases in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_"]
  var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaselist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var userWants = []

  if (userNumber === true) {
    userWants.push(numberList)
  }

  if (userSymbol === true) {
    userWants.push(symbolList)
  }

  if (userLowercase === true) {
    userWants.push(lowerCaseList)
  }

  if (userUppercase === true) {
      userWants.push(uppercaselist)
  }

  if (userWants.length === 0) {
    userWants.push(numberList)
  }

  var randomPassword = ""
  

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(userWants)
    var randomCharacters = getRandomItem(randomList)
    randomPassword += randomCharacters
    

    }

    return randomPassword

}



  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
