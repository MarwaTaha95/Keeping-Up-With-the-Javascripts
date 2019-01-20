/*
 * The following is an object that contains a list of men names
 * and some functions to use these values.
 */

var men = {
  
  // This variable indicates that men are mortal
  mortal : true,
  
  // List of men names
  names : ["aristotle", "socrates"],
  
  // Return if men are mortal
  isMortal : function(){
    return this.mortal;
  },
  
  // Check if name is a man, i.e. it's included in the list of men names
  isMan : function(name){
    return this.names.includes(name);
  }  
}

// A variable to represent socrates
var socrates = "socrates";

// A variable to represent william
var william = "william";

// Returns true if name is a man and mortal, false otherwise
function isMortal(name){
  // Check for the input type
  if(typeof name === 'string' || name instanceof String){
    // Check if name is a man
    if(men.isMan(name)){
      // check whether men are mortal or not
      if(men.isMortal()){
        return true;
      } 
    } else {
         return false;
    }
  } else {
    console.log(name + " is a Wrong input");
    return false;
  }
}

// Demonstrate the usage of isMortal method with different arguments
console.log(isMortal(socrates));
console.log(isMortal(william));
console.log(isMortal(1.6));
console.log(isMortal(true));
console.log(isMortal(["hi"]));

/*************************************/

// The possible types of cake
const cakeTypes = ["vanilla", "chocolate"];

console.log("Cake types: ");
console.log(cakeTypes);

// An object to represent a cake
var Cake = function (index){
  if(index < cakeTypes.length){
    this.type = cakeTypes[index];
  }
}


function cakeType(types, isChocolate){
  // If the cake is not vanilla
  if(isChocolate){
    return types[1];
     // Then the cake is chocolate
  } else {
    return types[0];
  }
}


console.log(cakeType(cakeTypes, true));
console.log(cakeType(cakeTypes, false));







