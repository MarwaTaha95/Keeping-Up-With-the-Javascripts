/**
 *
 * Print all the numbers from 1 to 100.
 *
 * If the number is a multiple of 3, 'Fizz' is printed
 *
 * If the number is a multiple of 5, 'Buzz' is printed
 *
 * If the number is a multiple of both, 3 and 5, 'FizzBuzz' is printed
 *
 * If the number is a prime number, 'prime' is printed
 *
 */
function printNumbers(){
  for(var i =0; i < 100; i++){
    if(i % 3 === 0){
		if(i % 5 === 0)
			console.log("FizzBuzz");
		else
			console.log("Fizz");
    } else 
        if(i % 5 === 0)
          console.log("Buzz");
        else
          if(isPrime(i))
            console.log("Prime")
          else
            console.log(i);
  }
}

/**
 *
 * Check for prime numbers.
 *
 * This function checks if num is a prime number or not.
 *
 * @param {number} num  'The number to check if prime or not'
 * 
 * @return {boolean} True if num is prime, false if not
 */
function isPrime(num){
  for(var i = num-1; i > 1; i--){
    if(num % i === 0 )
      return false;
  }
  return true;
}


printNumbers();