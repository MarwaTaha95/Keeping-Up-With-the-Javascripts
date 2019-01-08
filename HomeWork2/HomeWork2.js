/*
 * A variable is a container for data with several types. It could 
 * contain a number, string or boolean.
 * It could also contain arrays and objects.
 *
 * There are several types of variables regarding the scope they are 
 * defined in, and those are:
 * var, let, and const.
 *  
 * 1- var:
 *   It can be used and reassigned throughout multiple scopes. 
 *   However, this could cause a lot of problems for some situations
 *   where you want to get the value of each variable in it's scope.
 *   See the example below:
 */

function testVar(){
  var x = 1;
  if(true){
    var x = 2;
    console.log(x);
  }
  console.log(x);    
}

/*
 * in this example, x was printed as 2 in both cases, even though 
 * we have different value for each scope. That could cause a problem
 * in cases like this.
 *
 * 2- let:
 *   let variables can only be used or reassigned within their scopes,
 *   and not accessable outside the scope, it can help a lot 
 *   organizing the code and get the intended value for each variable.
 *   See the example below:
 *
 */

function testLet(){
  let y = 1;
  if(true){
    let y = 2;
    console.log(y);
  }
  console.log(y);
}

/*
 * In the example above, y was printed according to it's value in it's
 * scope only, and it's not accessable outside the scope.
 *
 * 3-const:
 *   const is a variable that can't be reassigned after it's initialized.
 *   This is usful for declaring constants like PI, so we don't
 *   need to change it, and if we try to change it, it'll throw an error.
 *   Scope-wise, const is accessed the same way as let, so it's only accessable within scope.
 */

const z = 0;

function testConst(){
  if(true){
    const z = 1;
  }
  // Reassigning the value throws an error
  // test this by uncommenting the line below
  // z = 5;
  console.log(z);
}


// Run the tests above :
testLet();
testVar();
testConst();

/*
 * Lastly, to get the full picture when talking about variables, we should 
 * mention hoisting.
 *
 * Hoisting is the ability to use a variable before it's declared,
 * because all declarations are moved to the top of the current scope
 * by default. 
 * See below:
 */

l = 3;

console.log(l);

var l;
