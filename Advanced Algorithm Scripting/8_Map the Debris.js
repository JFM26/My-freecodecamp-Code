
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  //loop through array to get orbitalPeriod of each
  for(i=0;i<arr.length;i++){
    //apply formula to get orbitalPeriod
    var a = earthRadius+arr[i].avgAlt;
    var result = Math.round( 2 * Math.PI * Math.sqrt(Math.pow(a,3)/GM));
    //set orbitalPeriod and delete avgAlt so only have name and orbitalPeriod
    arr[i].orbitalPeriod = result;
    delete arr[i].avgAlt;
  }
  return arr ;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

