// Bubble Sort
// A sorting algorithm where the largest values bubble up to the top!
// https://visualgo.net/en

// [5<-, ->3, 4, 1, 2]
// [3, 5<-, ->4, 1, 2]
// [3, 4, 5<-, ->1, 2]
// [3, 4, 1, 5<-, ->2]
//  [3, 4, 1, 2, 5!]

// Before we sort, we must swap!
// Many sorting algorithms are involved some type of swapping functionality (e.g. swapping to number to put them in order)
// ES5
function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES6
const swap6 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Pseudocode!
// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j + 1], swap those two values
// Return the sorted array

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log('Bubble Sort:');
console.log(bubbleSort([1, 3, 23, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 4, 5, 6, 7, 8, 9, 10, 23]

// teacher version
function bubbleSort2(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

console.log('Bubble Sort 2:');
console.log(bubbleSort2([1, 3, 23, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 4, 5, 6, 7, 8, 9, 10, 23]

// ES6 version
function bubbleSort3(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
