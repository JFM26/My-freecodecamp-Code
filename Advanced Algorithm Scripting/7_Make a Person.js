var Person = function(firstAndLast) {
  //create variables firstname and lastName  
  var firstName = firstAndLast.slice(0,firstAndLast.indexOf(" "));
  var lastName = firstAndLast.slice(firstAndLast.indexOf(" ")+1,firstAndLast.length);
   
    
  this.getFullName = function() {
   return firstName + " " + lastName;
  };
  this.getFirstName =function(){
   return  firstName;
  };
  this.getLastName = function(){
   return lastName;
  };
  //set firstName to new value
  this.setFirstName=function(first){
    firstName = first;
  };
  //set lastName to new value
  this.setLastName=function(last){
    lastName = last;
  };
  this.setFullName=function(firstLast){
    //set firstName and lastName to new values
    firstName =  firstLast.slice(0,firstLast.indexOf(" "));
    lastName = firstLast.slice(firstLast.indexOf(" ")+1,firstLast.length);
  };
};

var bob = new Person('Bob Ross');

bob.getFullName();
