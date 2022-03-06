// Section 9: Bonus CHALLENGING Recursion Problems
// Coding Exercise 15: reverse
function reverse(str) {
  if(str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log('reverse')
console.log(reverse('awesome')); // emosewa
console.log(reverse('rithschool')); // 'loohcsmhtir

// Coding Exercise 16: isPalindrome
function isPalindrome(str) {
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}

console.log('isPalindrome')
console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobarc')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

// Coding Exercise 17: someRecursive
const isOdd = val => val % 2 !== 0;
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

console.log('someRecursive');
console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false

// Coding Exercise 18: flatten
function flatten(oldArr){
  let newArr = []
  for(let i = 0; i < oldArr.length; i++){
    if(Array.isArray(oldArr[i])){
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}

console.log('flatten');
console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

// Coding Exercise 19: capitalizeFirst
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;

}

console.log('capitalizeWords');
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

// Coding Exercise 20: nestedEvenSum
function nestedEvenSum (obj, sum=0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object'){
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
      sum += obj[key];
    }
  }
  return sum;
}

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

let obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log('nestedEvenSum');
console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

// Coding Exercise 21: capitalizeWords
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log('capitalizeFirst');
console.log(capitalizeFirst(words)); // ['I', 'Am', 'Learning', 'Recursion']

// Coding Exercise 22: stringifyNumbers
function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log('stringifyNumbers');
console.log(stringifyNumbers(obj));
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// Coding Exercise 23: collectStrings
function collectStrings(obj) {
  let stringsArr = [];

  function gatherStrings(o) {
    for(let key in o) {
      if(typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      }
      else if(typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log('collectString');
console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

function collectStrings2(obj) {
  let stringsArr = [];
  for(let key in obj) {
    if(typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    }
    else if(typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}
