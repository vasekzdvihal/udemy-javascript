

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo2(n) {
  return n * (n + 1) / 2;
}

// performance works in Chrome, not in Node.js

let t1 = performance.now();
console.log(addUpTo(3));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

let t3 = performance.now();
console.log(addUpTo2(3));
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds`)

// https://cs.slides.com/colt_steele/big-o-notation
// https://rithmschool.github.io/function-timer-demo/

// Simplifying Big O Expression
// Constants Don't Matter
// O(2n) -> O(n)
// O(500) -> O(1)
// O(13n^2) -> O(n^2)

// Smaller Terms Don't Matter
// O(n + 10) -> O(n)
// O(1000n + 50) -> O(n)
// O(n^2 + 5n + 8) -> O(n^2)

// Analyzing complexity with big O can get complicated
// 1. Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array (by index) or object (by key) is constant
// 4. In a loop, the complexity is the length of the loop times the complexity or whatever happens inside of the loop

// !!!
// To analyze the performance of an algorithm, we use Big O Notation
// Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
// Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
// The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
// Big O Notation is everywhere, so get lots of practice!