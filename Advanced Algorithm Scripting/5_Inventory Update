function updateInventory(arr1, arr2) {
  //Check every sub array in arr2 ( inventory item ) and see if it exists in arr1
  //If it exists update arr1 and if it does not add to arr1
  //use count to check if inventory item of arr2 was found or not in
  //arr1, count===arr1.length if not found in arr1
  arr2.forEach(function(a,index){
    var count = 0;
    for(i=0;i<arr1.length;i++){
    if(a.indexOf(arr1[i][1])>0){
      arr1[i][0] += arr2[index][0];
    }
    else{count++;}
    }
    
    if(count===arr1.length){
      arr1.push([arr2[index][0],arr2[index][1]]);
    }
    count = 0;
  });
  //return alphabeticallly ordered array
  return arr1.sort(function(a,b){      
    if(a[1]<b[1]){return -1;}//sort a lower index than b (a comes first)
    if(a[1]>b[1]){return 1;}//sort b to lower index than a (b comes first)
    else{return 0;}//a and b unchanges
  });
}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
