/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

//Note: There were some weird numerical values being returned in some float operations, i'm not sure if it some bug in the freecodecamp ide 

function checkCashRegister(price, cash, cid) {
  let change;
  return change;
}

function checkCashRegister(price, cash, cid) {
  let originalCid = [];
  for(let i = 0; i < cid.length; i++){
    originalCid.push(cid[i].slice());
  }
  let currenciesUnits = [0.01,0.05,0.1,0.25,1,5,10,20,100]; //Aux
  let cashRegister = { status:"", change:[]}; //Object
  let changeValue = cash - price;
  for(let i = currenciesUnits.length-1; i >= 0; i--){
    if(currenciesUnits[i] < changeValue){
      if(cid[i][1] != 0){
      //This currency unit is available
       if(cid[i][1] >= changeValue){
         //This currency unit is enough to cover the change value
         let exactChange = Math.ceil((100*changeValue) % (100*currenciesUnits[i]))/100; //Float values bug
         if(exactChange == 0 ){
           //We can return the exact amount left with this currency
            cashRegister.change.push([cid[i][0],changeValue]);
            cid[i][1] = cid[i][1]-changeValue;
            console.log("Valor: " + cid[i][1]);
            changeValue = 0;
            break;           
         }else{
           //We are also going to need lower value currency
           cashRegister.change.push([cid[i][0],Math.ceil((100*changeValue) - (100*exactChange))/100]);
           cid[i][1] = Math.ceil((100*changeValue) - (100*exactChange))/100;
           changeValue = exactChange; //Amount left to cover
         }
       }else{
        //This currency unit isn't enough to cover the change value
        cashRegister.change.push([cid[i][0],cid[i][1]]);
        changeValue = Math.ceil((100 * changeValue) - (100 * cid[i][1]))/100;  //There is some weird bug with float values that return wrong values
       }
      }
    }
  }

  
  if(changeValue != 0){      
    //Cash-in-drawer is less than the change due, or is impossible to return the exact change
    cashRegister.status = "INSUFFICIENT_FUNDS";
    cashRegister.change = [];
  }else{
   let changeLeft = 0;
   for(let i = 0; i < cid.length; i++){
     changeLeft += cid[i][1];
   }
   if(changeLeft == 0){      
    //cash-in-drawer is equal to the change due
    cashRegister.status = "CLOSED";
    cashRegister.change = originalCid;
  }else{
    cashRegister.status = "OPEN";
  }
  }
  return cashRegister;
}
