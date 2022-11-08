/*

Convert the given number into a roman numeral.
Roman numerals 	Arabic numerals
M 	1000
CM 	900
D 	500
CD 	400
C 	100
XC 	90
L 	50
XL 	40
X 	10
IX 	9
V 	5
IV 	4
I 	1

All roman numerals answers should be provided in upper-case.

*/

function convertToRoman(num) {
 if(num < 1){                 
  alert("The number must be 1 or higher");
  return "error";
 }else{
   let roman = "";
   let aux = [num,roman];
   aux = convertToRomanM(aux);
   aux = convertToRomanCM(aux);
   aux = convertToRomanD(aux);
   aux = convertToRomanCD(aux);
   aux = convertToRomanC(aux);
   aux = convertToRomanXC(aux);
   aux = convertToRomanL(aux);
   aux = convertToRomanXL(aux);
   aux = convertToRomanX(aux);
   aux = convertToRomanIX(aux);
   aux = convertToRomanV(aux);
   aux = convertToRomanIV(aux);
   aux = convertToRomanI(aux);
   return aux[1];
 }
}

function convertToRomanM(aux) {
 if(aux[0]%1000 != aux[0]){              
  aux[0] = aux[0] - 1000;
  aux[1] = aux[1] + "M";
  return convertToRomanM(aux);   
 }else{                        
   return aux;
 }
}

function convertToRomanCM(aux) {
 if(aux[0]%900 != aux[0]){                 
  aux[0] = aux[0] - 900;
  aux[1] = aux[1] + "CM";
  return convertToRomanCM(aux);   
 }else{                         
   return aux;
 }
}

function convertToRomanD(aux) {
 if(aux[0]%500 != aux[0]){                 
  aux[0] = aux[0] - 500;
  aux[1] = aux[1] + "D";
  return convertToRomanD(aux);   
 }else{                         
   return aux;
 }
}

function convertToRomanCD(aux) {
 if(aux[0]%400 != aux[0]){                 
  aux[0] = aux[0] - 400;
  aux[1] = aux[1] + "CD";
  return convertToRomanCD(aux);   
 }else{                         
   return aux;
 }
}

function convertToRomanC(aux) {
 if(aux[0]%100 != aux[0]){                 
  aux[0] = aux[0] - 100;
  aux[1] = aux[1] + "C";
  return convertToRomanC(aux);   
 }else{                         
   return aux;
 }
}

function convertToRomanXC(aux) {
 if(aux[0]%90 != aux[0]){                 
  aux[0] = aux[0] - 90;
  aux[1] = aux[1] + "XC";
  return convertToRomanC(aux);   
 }else{                         
   return aux;
 }
}

function convertToRomanL(aux) {
 if(aux[0]%50 != aux[0]){                 
  aux[0] = aux[0] - 50;
  aux[1] = aux[1] + "L";
  return convertToRomanL(aux);   
 }else{                         
   return aux;
 }
}

function convertToRomanXL(aux) {
 if(aux[0]%40 != aux[0]){                 
  aux[0] = aux[0] - 40;
  aux[1] = aux[1] + "XL";
  return convertToRomanXL(aux);   
 }else{                         
   return aux;
 }
}

function convertToRomanX(aux) {
  if(aux[0]%10 != aux[0]){                 
  aux[0] = aux[0] - 10;
  aux[1] = aux[1] + "X";
  return convertToRomanX(aux);   
 }else{                         
   return aux;
 }
}

function convertToRomanIX(aux) {
 if(aux[0]%9 != aux[0]){                 
  aux[0] = aux[0] - 9;
  aux[1] = aux[1] + "IX";
  return convertToRomanIX(aux);   
 }else{                         
   return aux;
 }
}

function convertToRomanV(aux) {
 if(aux[0]%5 != aux[0]){                 
  aux[0] = aux[0] - 5;
  aux[1] = aux[1] + "V";
  return convertToRomanV(aux);   
 }else{                         
   return aux;
 }
}

function convertToRomanIV(aux) {
 if(aux[0]%4 != aux[0]){                 
  aux[0] = aux[0] - 4;
  aux[1] = aux[1] + "IV";
  return convertToRomanIV(aux);   
 }else{                         
   return aux;
 }
}

function convertToRomanI(aux) {
 if(aux[0]%1 != aux[0]){                 
  aux[0] = aux[0] - 1;
  aux[1] = aux[1] + "I";
  return convertToRomanI(aux);   
 }else{                         
   return aux;
 }
}
