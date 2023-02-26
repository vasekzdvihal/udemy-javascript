// ------------------
// Fibonacci Sequence
// ------------------

// Plain old recursive solution
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log('Plain old recursive solution');
console.log(fib(4));



