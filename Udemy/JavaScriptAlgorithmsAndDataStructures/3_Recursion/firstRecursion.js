// BASE CASE
// The condition when the recursion ends.
// This is the most important concept to understand

// Two essential parts of a recursive function!
// Base Case
// Different Input

// Looping way
// function countDown(num) {
//   for(let i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("Add done");
// }

// Same with recursion
function countDown(num) {
  if(num <= 0) {
    console.log('All done!');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

countDown(10);
