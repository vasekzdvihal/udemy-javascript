import { User } from "./models/User";


console.log('Hello from 13_LetsBuildWebFramework');

const user = new User({ name: 'brand new record', age: 2344234 });

user.on('change', () => {
  console.log('User was changed');
});

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
