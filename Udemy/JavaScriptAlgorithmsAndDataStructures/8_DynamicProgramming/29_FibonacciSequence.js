// ------------------
// Fibonacci Sequence
// ------------------

// Plain old recursive solution

// Big O of Recursive Solution
// Time Complexity - O(2^n)
// Space Complexity - O(n)

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log('Plain old recursive solution');
console.log(fib(7));

// Memoized solution

// Memoization is a technique that involves storing the arguments of
// each function call along with the result. If the function is called
// again with the same arguments, the result is returned instead of running the function again.

// Big O of Memoization
// Time Complexity - O(n)
// Space Complexity - O(n)

function fibMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;
  return res;
}

console.log('Memoized solution');
console.log(fibMemo(100));

// Tabulated solution

// Tabulation is the opposite of memoization. Instead of storing the results of a function,
// we store the results of a function (usually an iterative version). Usually done using
// something like a table (hence the name "tabulation").

// Big O of Tabulation
// Time Complexity - O(n)
// Space Complexity - O(n)

function fibTab(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log('Tabulated solution');
console.log(fibTab(4));
