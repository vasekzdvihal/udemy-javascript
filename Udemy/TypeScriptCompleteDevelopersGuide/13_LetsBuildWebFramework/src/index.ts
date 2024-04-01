import { User } from "./models/User";


console.log('Hello from 13_LetsBuildWebFramework');

const user = new User({ name: 'brand new record', age: 2344234 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.set({ name: 'New name' });

// A quick reminder on accessors
// class Person {
//   constructor(public firstName: string, public lastName: string) {}
//
//   get fullName(): string { // get instead of function
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//
// const person = new Person('Vasa', 'Sasa');
// console.log(person.fullName);

// Reminder on how 'this' works in JS
// Rule of thumb: if you see a function being passed around as a callback,
// it's going to lose its context
