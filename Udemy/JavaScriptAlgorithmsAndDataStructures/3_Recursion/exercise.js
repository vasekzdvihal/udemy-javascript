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
function productOfArray(arr) {
  if(arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log('productOfArray');
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

// Coding Exercise 13: recursiveRange
function recursiveRange(num) {
  if(num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log('recursiveRange');
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

// Coding Exercise 14: fib
function fib(num) {
  if(num <= 2) return 1;
  return fib(num-1) + fib(num-2);
}

console.log('fib');
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
