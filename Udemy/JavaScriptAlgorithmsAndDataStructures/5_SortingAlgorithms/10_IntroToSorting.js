// What is sorting?
// Sorting is the process of rearranging the items in a collection (e.g. an array) so that they are in some kind of order.

// Example:
// - Sorting numbers from smallest to largest
// - Sorting strings alphabetically
// - Sorting objects by some property

// Sorting is an incredibly common task, so it's good to know how it works
// There are many ways to sort things, and different techniques have their own advantages and disadvantages
// https://www.toptal.com/developers/sorting-algorithms
// It's a classic interview question

// Objectives
// Implement bubble sort
// Implement selection sort
// Implement insertion sort

// Understand why it is important to learn these simpler sorting algorithms

// ---------------------------------------------------------------------------------------------------------------------
// Build-In Javascript Sorting Methods
console.log(['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort()); // ['Algorithms', 'Colt', 'Data Structures', 'Steele']
console.log([23, 45, 6, 12, 13].sort()); // Expected output: [6, 12, 13, 23, 45]
// Numbers doesn't sort by default by number, but by their string representation (viz. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

// Telling JavaScript how to sort
// - The built-in sort method accepts an optional compare function
// - You can use this comparator function to tell JavaScript how you want it to sort
// - The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
//    - If it returns a negative number, a will be sorted before b
//    - If it returns a positive number, b will be sorted before a

function numberCompare(num1, num2) {
  return num1 - num2;
};

console.log([23, 45, 6, 12, 13].sort(numberCompare)); // Expected output: [6, 12, 13, 23, 45]

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

console.log(['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen)); // Expected output: ['Algorithms', 'Colt', 'Data Structures', 'Steele']

//   Basic Sorting Algorithms
// |----------------|------------------------|---------------------------|-------------------------|------------------|
// | Algorithm      | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
// |----------------|------------------------|---------------------------|-------------------------|------------------|
// | Bubble Sort    | O(n)                   | O(n^2)                    |  O(n^2)                 | O(1)             |
// | InsertionSort  | O(n)                   | O(n^2)                    |  O(n^2)                 | O(1)             |
// | Selection Sort | O(n^2)                 | O(n^2)                    |  O(n^2)                 | O(1)             |
// |----------------|------------------------|---------------------------|-------------------------|------------------|

// https://www.toptal.com/developers/sorting-algorithms

// Recap
// - Sorting is fundamental!
// - Bubble sort, selection sort and insertion sort are all roughly equivalent
// - All have average time complexities that are quadratic
// - We can do better...but we need more complex algorithms
