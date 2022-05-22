// Insertion sort
// Builds up the sort by gradually creating a larger left half which is always sorted

// Pseudocode
// - Start by picking the second element in the array
// - Now compare the second element with the one before it and swap if necessary.
// - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
// - Repeat until the array is fully sorted.

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j+1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([34, 22 ,10, 19, 17]));
// Works best for almost sorted arrays
// or for "online sorting" where you are adding new elements one by one


