/*
Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

function checkParentheses(str){
  let regExPL = /\(/g;
  let regExPR = /\)/g;
  let regExFullP = /\(\d\d\d\)/g;
  let regAux = /\(\d\d\d\)/;
  if( ( (str.match(regExPL) == null) && ((str.match(regExPR) != null)) ) || ( (str.match(regExPL) != null) && ((str.match(regExPR) == null)) )){
    //String with one or more "(" and zero ")" or vice versa
    return false;
  }else{
    if( (str.match(regExPL) != null) && (str.match(regExPR) != null)){
      //The strings contains "(" and ")"
      if(str.match(regExFullP) == null){
        //Wrong amount of numbers between parentheses
        return false;
      }else{
       if( (str.match(regExFullP).length != str.match(regExPL).length) || (str.match(regExFullP).length != str.match(regExPR).length)){
        //Wrong amount of numbers between parentheses
        return false;
      } 
      }
    }
  }
  return true;
}

function checkCountryCode(str){
  let regExCode = /^(\d+)(\(|-| )/g;
  let regExNumbers = /\d/;
  if(!regExNumbers.test(str[0]) && (str[0] != "(")){
    //First character must be a number or "("
    return false;
  }
  if(str.match(regExCode) != null){
    let auxCode = str.match(regExCode)[0];
    if((auxCode.length != 2)&&(auxCode.length != 4)){
      //With area code "1 " the length is 2, without "555 " the length is 4
      return false;
    }
    if(!regExNumbers.test(auxCode[1])){
      //Only the first character is a number
      if(auxCode[0] != 1){
        return false;
      }
    }
  };
  return true;
}

function checkNumberQuantity(str){
   let regExNumbers = /\d/g;
   if(regExNumbers.test(str[0]) && ((str[1] == " ")||(str[1] == "("))){
     //Number with area code
    if(str.match(regExNumbers).length != 11){
      return false;
    }
   return true;
  }else{
    //Number without area code
    if(str.match(regExNumbers).length != 10){
    return false;
    }
   return true;
  }
}


function telephoneCheck(str) {
  if(!checkParentheses(str)){
    return false;
  };
  if(!checkCountryCode(str)){
    return false;
  };
  if(!checkNumberQuantity(str)){
    return false;
  };
  let regEx = /1?(?= ?)(\(\d\d\d\)|\d{3}) ?-?\d{3}-? ?\d{4}/;
  return regEx.test(str);
}

/*console.log("1true - " + telephoneCheck("1 555-555-5555"));
console.log("2true - " + telephoneCheck("1 (555) 555-5555"));
console.log("3true - " + telephoneCheck("5555555555"));
console.log("4true - " + telephoneCheck("555-555-5555"));
console.log("5true - " + telephoneCheck("(555)555-5555"));
console.log("6true - " + telephoneCheck("1(555)555-5555"));
console.log("7false - " + telephoneCheck("555-5555"));
console.log("8false - " + telephoneCheck("5555555"));
console.log("9false - " + telephoneCheck("1 555)555-5555"));
console.log("10true - " + telephoneCheck("1 555 555 5555"));
console.log("11true - " + telephoneCheck("1 456 789 4444"));
console.log("12false - " + telephoneCheck("123**&!!asdf#"));
console.log("13false - " + telephoneCheck("1 555)555-5555"));
console.log("14false - " + telephoneCheck("(6054756961)"));
console.log("15false - " + telephoneCheck("2 (757) 622-7382"));*/
