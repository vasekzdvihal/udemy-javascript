// ----------------------------
// Data Structures Introduction
// ----------------------------

// Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.
// Data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.


// ES2015 Class Syntax Overview
// ---------------------------

// ES2015 introduces a new syntax for creating and working with classes. Classes are a new way to write the same old prototype-based inheritance that we've been using since the beginning of JavaScript.

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// The method to create a new object must be called constructor.
// The class keyword creates a constant, so you cannot redefine it.

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

console.log(firstStudent);
console.log(secondStudent);
