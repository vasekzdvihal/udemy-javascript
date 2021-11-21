
function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(3));

// sumRange(3) // returns 6;
//           return 3 + sumRange(2) // waiting for return, gets 3, sp return 3 + 3 = 6
//                             return 2 + sumRange(1); // waiting for return, gets 1, so return 2 + 1 = 3;
//                                               return 1; // base case

