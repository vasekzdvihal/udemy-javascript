
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

console.log('-----------------');
console.log('Coding Exercise 7');
console.log('-----------------');
console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0,-2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, -4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log('-----------------');
console.log('Coding Exercise 8');
console.log('-----------------');
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than t
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
// teacher
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while(start < nums.length) {
    // if current window doesn't add up to the given sum then move the window to right
    if(total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then we can shrink the window
    else if(total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log('-----------------');
console.log('Coding Exercise 9');
console.log('-----------------');
console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('thisislongestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
// teacher
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

























