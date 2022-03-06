// -------------
// Linear Search
// -------------

// Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.

// JavaScript has search! There are many different search methods on arrays in JavaScript:
// indexOf
// includes
// find
// findIndex

const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
const numbers = [5, 8, 1, 100, 12, 3, 12];

function linearSearch(arr, value) {
  for(let i = 0; i <= arr.length; i++) {
    if(arr[i] === value) return i;
  }
  return -1;
}

console.log('linearSearch');
console.log(linearSearch(numbers, 100));
console.log(linearSearch(states, 'Texas'));

console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5
console.log(linearSearch([100], 100)) // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)) // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)) // -1
console.log(linearSearch([100], 20)) // -1
