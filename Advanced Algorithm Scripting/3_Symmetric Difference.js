
function sym(args){
   //array of arguments
    var arr =[].slice.call(arguments);
    //check for sym diff against this var
    //and store results in this array
    var symArr = [];
    
    //while arr.length bigger than 0
    //call symIt() and splice first array in arr
    while(arr.length>0){
        symIt();
        arr.splice(0,1);
    } 
  
    //func to check for symmentric differences      
    function symIt(){
        //use reduce to remove duplicate numbers
        var a = arr[0].reduce(function(a,b){
          if (a.indexOf(b) < 0 ) a.push(b);
          return a;
        },[]);
        //if numbers in 2 array match delete them (slice them off symArr)
        //if not match push to symArr
        for(var i=0;i<a.length;i++){            
            if(symArr.indexOf(a[i])>=0){
                symArr.splice(symArr.indexOf(a[i]),1);
            }
            else{
                symArr.push(a[i]);
            }
        }        
    }
  //sort symarr
  return symArr.sort(function(a,b){
    return a-b;
  });
}

sym([3,3,3,2,5],[2,1,5,7],[3,4,6,6],[1,2,3],[5,3,9,8],[1]);
