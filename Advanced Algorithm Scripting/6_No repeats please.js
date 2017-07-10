
function permAlone(str) {
  
  var arr = str.split('');
  var result = 0;
  var ar2 =[];
  //make swap func
  function swap(a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  } 
  //heaps algirithom
  function generate(n){
    //regex to filter out dubbels
    var regex = /([a-z])\1+/;
    if(n===1 && !regex.test(arr.join(''))){
       result++;
       }
    else{
      for(var i = 0; i < n; i++){
        generate(n-1);
        //if n even
        if(n % 2 ===0){
        swap(i,n-1);
        }
        //if n odd
        else{
          swap(0,n-1);
        }
      }
    }    
  }
  generate(str.length);
  return result;
}

permAlone('aab');
