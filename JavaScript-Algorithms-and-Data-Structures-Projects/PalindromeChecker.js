/*Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.*/

function palindrome(str) {
  str = onlyAlphaNumeric(str);
  let aux = str.length-1;             //Last element
  for(let i = 0; i < str.length; i++){  //Characters check
    if(str[i] != str[aux]){
      return false
    }
    aux--;
  }
  return true;
}

function onlyAlphaNumeric(str){
  let nonAlphaNumericRegEx = /[A-Za-z0-9]/ig;          //Only alphanumerics characters
  str = str.match(nonAlphaNumericRegEx,""); //We extract them
  str = str.join("");         //Array to string
  str = str.toLowerCase();    
  return str;
}

palindrome("_eye");
