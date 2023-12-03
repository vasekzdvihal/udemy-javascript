import { User } from './models/User';

const user = new User({name: "myName", age: 12 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'newName', age: 999 });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
  console.log('Hi');
});
user.on('change', () => {
  console.log('Hi 2');
});
user.on('save', () => {
  console.log('Hi 43');
});

console.log(user);

user.trigger("change");
user.trigger("save");
