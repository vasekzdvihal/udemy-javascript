// ---------------
// PROBLEM SOLVING
// ---------------

// ----------------------
// Understand the Problem
// ----------------------
// Can I restate the problem in my own words?
// What are the inputs that go into the problem?
// What are the outputs that should come from the solution to the problem?
// Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
// How should I label the important pieces of data that are a part of the problem?

// -------------------------
// Explore Concrete Examples
// -------------------------
// Write a function which takes in a string and return counts of each character in the string.

// Start with Simple Examples
charCount("aaaa") // {a:4}
charCount('hello') // {h:1, e:1,  l:2, o:1}

// Progress to More Complex Examples
charCount("my phone number is 182763") // numbers?
charCount("Hello hi") // lower and upper case separate

// Explore Examples with Empty Inputs
charCount('')

// Explore Examples with Invalid Inputs

// -------------
// Break It Down
// -------------
function charCountBrokeDown(str) {
  // make object to return at end
  // loop over string for each character
    // if the char is number/letter AND is a key in object, add one to count
    // if char is number/letter AND not in object, add it to object and set value to 1
    // if character is something else (space, period, ect...) don't do anything
  // return object at the end
}

// --------------
// Solve/Simplify
// --------------
function charCountSolved(str) {
  // make object to return at end
  let result = {};
  // loop over string for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if character is something else (space, period, ect...) don't do anything
    if(/[a-z0-9]/.test(char)) {
      // if the char is number/letter AND is a key in object, add one to count
      if(result[char] > 0) {
        result[char]++;
        // if char is number/letter AND not in object, add it to object and set value to 1
      } else {
        result[char] = 1;
      }
    }
  }
  // return object at the end
  return result;
}

// ----------------------
// Look Back and Refactor
// ----------------------
function charCount(str) {
  let result = {};
  for (let char of str) {
    if(isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 65 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)) { // lowe alpha (a-z)
    return false;
  }
  return true;
}