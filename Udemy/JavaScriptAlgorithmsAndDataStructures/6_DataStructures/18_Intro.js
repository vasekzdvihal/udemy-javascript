// ----------------------------
// Data Structures Introduction
// ----------------------------

// Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.
// Data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.


// ES2015 Class Syntax Overview
// ---------------------------

// ES2015 introduces a new syntax for creating and working with classes. Classes are a new way to write the same old prototype-based inheritance that we've been using since the beginning of JavaScript.

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  // instance method
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'You are expelled!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a,b) {return a + b});
    return sum / this.scores.length;
  }
}

// The method to create a new object must be called constructor.
// The class keyword creates a constant, so you cannot redefine it.

let firstStudent = new Student("Tony", "Stark", 5);
let secondStudent = new Student("Steve", "Rogers", 100);

console.log(firstStudent);
console.log(secondStudent);

// Instance methods are called on the instances of the class, not on the class itself.
console.log(firstStudent.fullName());
console.log(secondStudent.fullName());

// Mark late
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());

// Add score and calculate average
console.log(secondStudent.addScore(45));
console.log(secondStudent.addScore(87));
console.log(secondStudent.addScore(64));
console.log(secondStudent.addScore(11));
console.log(secondStudent.addScore(100));
console.log(secondStudent.addScore(89));
console.log('Average score: ' + secondStudent.calculateAverage());


