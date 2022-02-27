// Section 8:Recursion Problem Set

// Coding Exercise 10: power
function power(base, exponent) {
  if(exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log('power');
console.log(power(2, 0)) // 1
console.log(power(2, 2)) // 4
console.log(power(2, 4)) // 14

// Coding Exercise 11: factorial
function factorial(num) {
  if(num === 0) return 1;
  return num * factorial(num - 1);
}

console.log('factorial');
console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040

// Coding Exercise 12: productOfArray
// Coding Exercise 13: recursiveRange
// Coding Exercise 14: fib
