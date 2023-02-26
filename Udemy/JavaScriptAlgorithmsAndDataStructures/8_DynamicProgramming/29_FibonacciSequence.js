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

// Memoized solution
function fibMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;
  return res;
}

console.log('Memoized solution');
console.log(fibMemo(4));

