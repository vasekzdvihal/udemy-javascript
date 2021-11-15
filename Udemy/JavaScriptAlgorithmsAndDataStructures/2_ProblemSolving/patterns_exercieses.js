console.log('-----------------');
console.log('Coding Exercise 3');
console.log('-----------------');
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

function sameFrequency(a, b) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  if(a.toString().length !== b.toString().length) return false;

  for(let val of a.toString()) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of b.toString()) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for(let key in frequencyCounter1) {
    if(!key in frequencyCounter2) return false;
    if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
}

console.log('-----------------');
console.log('Coding Exercise 4');
console.log('-----------------');
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

function areThereDuplicates() {
  const counter = {};

  for(let i = 0; i < arguments.length; i++) {
    let character = arguments[i];
    counter[character] ? counter[character] += 1 : counter[character] = 1;
    if (counter[character] === 2) return true;
  }
  return false;
}

function areThereDuplicatesOneLiner() {
  return new Set(arguments).size !== arguments.length;
}

console.log('-----------------');
console.log('Coding Exercise 5');
console.log('-----------------');
console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([], 4)); // false

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let arrAvg = (arr[left] + arr[right]) / 2;
    if(arrAvg === avg) {
      return true;
    } else if(arrAvg > avg) {
      right --;
    } else {
      left++;
    }
  }
  return false;
}

console.log('-----------------');
console.log('Coding Exercise 6');
console.log('-----------------');
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
// teach solutions
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

function isSubsequence2(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}
