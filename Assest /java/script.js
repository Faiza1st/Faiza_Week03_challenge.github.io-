var length = 8;
var array =[];

// store glocal variables to be used across
var specialcharacters = ["!","@","#","$","%","^","&","*"]
var lowercase = ["a",	"b",	"c",	"d"	,"e",	"f",	"g",	"h",	"i",	"j",	"k", "l",	"m",	"n"	,"o"	,"p"	,"q",	"r", "s",	"t",	"u",	"v", "w",	"x",	"y",	"z"]
var uppercase = ["Apr",	"B",	"C",	"D"	,"E",	"F",	"G",	"H",	"I",	"J",	"K", "L",	"M",	"N"	,"O"	,"P"	,"Q",	"R", "S",	"T",	"U",	"V", "W",	"X",	"Y",	"Z"]
var numericnumbers = ["0", "1",	"2",	"3",	"4"	,"5",	"6",	"7",	"8",	"9"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var isTrue = promptInformation();

    if (isTrue) {
        var userPassword = generatePassword();
        var passwordText = document.querySelector("#password");
        
        passwordText.value = userPassword;
    }
}

function generatePassword() {
    // create prompts using the user input
    var password = "";
    for (var i = 0; i < length; i++) {
        //generate random section mode
        var random = Math.floor(Math.random() * array.length);
        password = password + array[random];
    }
    return password;
}
// ask user for input on how they will like their password to be 
function promptInformation() {
    array = [];
    //Ask user for Input lenght
    length = parseInt(prompt("How many characters do you want your password to have?"));

    if(isNaN(length) || length < 8 || length > 128) {
        // The length can not be lower than 8 or greater than 128
        alert("Character length has to be more than 8 and less than 128");
        return false;
    }
    // special character
    if (confirm ("Would you like special characters in your password?")) {
        array = array.concat(specialcharacters);
    }
    //Lowercase character
    if (confirm ("Would you like lower Case letters in your password?")) {
        array = array.concat(lowercase);
    }
    // upper case character
    if (confirm ("Would you like Upper Case letters in your password?")) {
        array = array.concat(uppercase);
    }
    // numbers in the pasword
    if (confirm ("Would you like Numeric letters in your password?")) {
        array = array.concat(numericnumbers);
    }
    return true;

}