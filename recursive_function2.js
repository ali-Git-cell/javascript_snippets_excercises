
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



// iterativeFibonacci
function iterativeFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let previous = 0;
  let current = 1;
  for (let i = n; i > 1; i--) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}


//Fibonacci Series using Recursion
    function recibonacci(n) {
    if (n <= 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

//recibonacci(6)

//Fibonacci Series using Recursion(alternative to the above func)
function recibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}
//recibonacci(6)
