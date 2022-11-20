// Selection sort
// Similar to bubble sort, but instead of first placing
// large values into sorted position, it places small values into sorted position

// If a smaller number is found, designate that smaller number to be the new "minimum"
// and continue until the end of the array.

// If the "minimum" is not the value (index) you initially began with, swap the two values.

// Repeat this with the next element until the array is sorted.

// Before we sort, we must swap!
// Many sorting algorithms are involved some type of swapping functionality (e.g. swapping to number to put them in order)
// ES5
function swapOld(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES6
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let lowest = i;
    for(let j = i+1; j < arr.length; j++) {
      console.log(i, j);
      if(arr[j] < arr[lowest]) lowest = j;
    }

    if(i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort([34, 22 ,10, 19, 17]));

// Is good idea in case, you don't want to make a lot of swaps.
