
function telephoneCheck(str) {
    //Regexp characters (,),/,-,whitspaces to get  string (var a) without them just numbers
    var re = /[()-\s]/g;
    var a = str.replace(re,'');
    //if any of following condition true return false    
    if(a.length<10 || /[^\d]/g.test(a) || a.length===11 && str.charAt(0) !== "1" ||
       a.length>11 || /[)]/g.test(str) && !/[(]/g.test(str)){
        return false;
    }
   //if ( present check that 3 numbers then ) character
    if(/[(]/g.test(str)){
        //slice ( of wih 4 charcters and splice string to check
        //if other () characters present
        var b = str.slice(str.indexOf('('),str.indexOf('(')+5);
        str = str.slice(str.indexOf('(')+5,str.length);
        //if other () present false
        if(/[()]/g.test(str)){
          return false;
        }else{
          //if ( then 3 numbers then ) return true
          if(/\(\d{3}\)/g.test(b)){
            return true;
          }else{
            return false;
          }
        }
    }
 return true; 

}


telephoneCheck("(555-555-5555)");

