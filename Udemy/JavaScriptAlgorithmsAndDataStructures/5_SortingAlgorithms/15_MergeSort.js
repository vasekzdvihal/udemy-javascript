// ----------
// Merge sort
// ----------

// Why?
// The sorting algorithms we-ve learned so far don't scale well

// - It's combination of two things - merging and sorting!
// - Exploits the fact that ararys of 0 or 1 element are always sorted
// - Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// Algorithm is visualized here https://visualgo.net/en/sorting

// 1. Merging arrays
// - In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// - Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// - This function should run in o(n + m) time and O(n + m) space and should not modify the parameters passed to it.

// Pseudocode
// - Create an empty array, take a look at the smallest values in each input array
// - While there are still values we haven't looked at...
//     - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
//     - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
//     - Once we exhaust one array, push in all remaining values from the other array

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// 2. Merge sort - sorting part
// Pseudocode
// - Break up the array into halves until you have arrays that are empty or have one element
// - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// - Once the array has been merged back together, return the merged (and sorted!) array

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);;
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));

// Big O of mergeSort
//
// |-----------------|-----------------|-----------------|------------------|
// | Time Complexity | Time Complexity | Time Complexity | Space Complexity |
// | (Best)          | (Average)       | (Worst)         |                  |
// |-----------------|-----------------|-----------------|------------------|
// | O(n log n)      | O(n log n)      | O(n log n)      | O(n)             |
// |-----------------|-----------------|-----------------|------------------|