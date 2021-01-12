var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;


function length(){

  passwordLength = prompt("Choose # of characters! (between 8-128 characters): ");

    if (passwordLength < 8){
      alert("Password length must be between 8-128 characters");
      length();
    }else if (passwordLength > 128){
      alert("Password length must be between 8-128 characters");
      length();
    }else{
    alert("Enter Criteria for password");
    }
    return passwordLength;
}


function uppercase(){
  
  uppercaseCheck = prompt("Uppercase characters? yes/no");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("yes or no");
      uppercase();

    }else if (uppercaseCheck === "yes"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("yes or no");
      uppercase();
    }
    return uppercaseCheck;
}



function numbers(){
  
  numberCheck = prompt("Numbers? yes/no");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("yes or no");
      numbers();

    }else if (numberCheck === "yes"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("yes or no");
      numbers();
    }
    return numberCheck;
}


function special(){
  
  specialCheck = prompt("Special characters? yes/no");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("yes or no");
      special();

    }else if (specialCheck === "yes"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("yes or no");
      special();
    }
    return specialCheck;
}

 
function generatePassword(){
  length();
  
  uppercase();
  
  numbers();
  
  special();
  

var characters = lowercaseChar;
var password1 = "";

if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password1 += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password1;
}


function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);