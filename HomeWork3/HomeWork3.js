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

// Check if socrates is a man
if(men.isMan(socrates)){
  
  // check whether men are mortal or not
  if(men.isMortal()){
    console.log("Socrates is mortal");
  }
}


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

var chocolateCake = new Cake(1);

// If the cake is not vanilla
if(chocolateCake.type !== "vanilla"){
  console.log("The cake is not vanilla");
  
  // Then the cake is chocolate
  if(chocolateCake.type === "chocolate"){
    console.log("The cake is " + chocolateCake.type);
  }
}
