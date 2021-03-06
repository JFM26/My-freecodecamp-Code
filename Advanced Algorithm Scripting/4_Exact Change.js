
function checkCashRegister(price, cash, cid) {
  var changeName = ["ONE HUNDRED","TWENTY","TEN","FIVE","ONE","QUARTER","DIME","NICKEL","PENNY"];
  var changeValue = [100,20,10,5,1,0.25,0.10,0.05,0.01];
  var exactChange = Math.round((cash - price)*100)/100; //do Math.round(X*100)/100 to get 2 decimal places
  var changeOut =[];
  //flatten cid array
  cid = cid.reduce(function(a,b){return a.concat(b);});
  var cashInRegister = {};  
  //store value of cash in the register of different notes and coins
  //in a object
  while(cid.length>0){
    var a = cid.splice(0,1);
    var b = cid.splice(0,1);
     cashInRegister[a[0]]=b[0];            
  }
  
  //loop through changevalue
  for(var index = 0;index < changeValue.length;index++){
    //if condition is met count++, reduce exactChange and cashInRegister
    var count = 0;
    while(changeValue[index] <= exactChange && cashInRegister[changeName[index]] >0){      
      count ++;
      exactChange = Math.round((exactChange - changeValue[index])*100)/100;
      cashInRegister[changeName[index]] = Math.round((cashInRegister[changeName[index]] -          
                                                      changeValue[index])*100)/100;      
    }
  if (count>0){
    //push array to changeOut array
    changeOut.push([changeName[index] ,Math.round((changeValue[index]*count) * 100) / 100]);
    }
  }
  
  //if exactChange >0 after for loop return "Insufficient Funds"
  if(exactChange>0){
    return "Insufficient Funds";
  }
  
  //if after change is given no cash in register return "closed"  
  var counter = 0;
  for(var i =0;i<changeName.length;i++){
    if(cashInRegister[changeName[i]]===0){
      counter++;   
    }
  }

  return counter===changeName.length? "Closed": changeOut;   
}
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
