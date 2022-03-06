// -------------
// Binary Search
// -------------

// Binary search is a much faster form of search. Rather than eliminating on element at a time, you can eliminate half of the remaining elements at a time.
// Binary search only works on SORTED arrays.

const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while(arr[middle] !== elem && start <= end) {
    if(elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem) return middle;
  return -1;
}

function binarySearchShort(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while(arr[middle] !== elem && start <= end) {
    if(elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 28));
// [2,5,6,9,13,15,28,30]
//  S     M           E
// [2,5,6,9,13,15,28,30]
//          S  M      E
// [2,5,6,9,13,15,28,30]
//                SM  E

console.log('binarySearch');
console.log(binarySearch([1,2,3,4,5], 2)) // 1
console.log(binarySearch([1,2,3,4,5], 3)) // 2
console.log(binarySearch([1,2,3,4,5], 5)) // 4
console.log(binarySearch([1,2,3,4,5], 6)) // -1
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10)) // 2
