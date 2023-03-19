const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const hobbies = ['Sports', 'Cooking'];

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);


// Spread and rest operators

// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies]; // Spread operator
const copiedPerson = {...person};

// const toArray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// };
const toArray = (...args) => { // Rest operator
  return args;
};

console.log(toArray(1, 2, 3));
console.log(toArray(1, 2, 3, 4, 5));

// Destructuring
// const printName = (person) => {
//   console.log(person.name);
// }
const printName = ({name}) => {
  console.log(name);
}


printName(person);


const { name, age } = person;
console.log(name, age);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
