// ------------------
// Frequency counters
// ------------------
// This pattern uses objects or sets to collect values/frequencies of values

// EX.: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's
// corresponding value squared in the second array. The frequency of values must be the same.

const a = same([1,2,3], [4,1,9]) // true
const b = same([1,2,3], [1,9]) // false
const c =  same([1,2,1], [4,4,1]) // false (must be same frequency)

console.log(a, b, c)

// naive, O(n^2)
function sameNaive(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for(let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // ** 2 is square
    if(correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// refactored O(n)
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for(let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) return false;
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}

// EX.: Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const d = validAnagram('', '') // true
const e = validAnagram('aaz', 'zza') // false
const f = validAnagram('anagram', 'nagaram') // true
const g = validAnagram("rat","car") // false) // false
const h = validAnagram('awesome', 'awesom') // false
const i = validAnagram('qwerty', 'qeywrt') // true
const j = validAnagram('texttwisttime', 'timetwisttext') // true

console.log(d, e, f, g, h, i ,j);

function validAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for(let s of str1) {
    frequencyCounter1[s] = (frequencyCounter1[s] || 0) + 1
  }
  for(let s of str2) {
    frequencyCounter2[s] = (frequencyCounter2[s] || 0) + 1
  }
  for(let key in frequencyCounter1) {
    if(!(key in frequencyCounter2)) return false;
    if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
}

function validAnagramTeacherSolution(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagramTeacherSolution('anagrams', 'nagarasm'));
