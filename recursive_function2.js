
//terative and recursive versions of a function to compute the Nth Fibonacci number of an integer.

// fatorial with iterative approach
function recursiveFactorial(n) {
  if(n === 0){
    return 0
  }
  else if(n === 1){
    return 1
  }else if(n > 1){
    return recursiveFactorial(n-1) + recursiveFactorial(n-2);
  }
}

// fatorial with recursive
function recursiveFactorial(n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
}


//Fibonacci Series using Recursion
// function returns the Fibonacci number
    function fibonacci(n) {
    if (n <= 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

//fibonacci(6)
