// -----------------
// Multiple Pointers
// -----------------

// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
// EX.: Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

console.log(sumZeroNaive([-3,-2,-1,0,1,2,3])); // [-3,3]
console.log(sumZeroNaive([-2,0,1,3])); // undefined
console.log(sumZeroNaive([1,2,3])); // undefined

// Naive O(N^2)
function sumZeroNaive(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Refactored O(N)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// EX.: Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4

function countUniqueValues(arr) { // I have same as teacher
  let pack = 0;
  for(let scout = 0; scout <= arr.length; scout++) {
    if(arr[pack] !== arr[scout]) {
      pack++;
      arr[pack] = arr[scout];
    };
  }
  return pack++;
}
