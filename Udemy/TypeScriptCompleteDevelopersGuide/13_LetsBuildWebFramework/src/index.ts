// import { User } from './models/User';
//
// const user = new User({name: "myName", age: 12 });
//
// user.on('change', () => {
//   console.log('Change #1');
// });
// user.on('change', () => {
//   console.log('Change #2');
// });
// user.on('save', () => {
//   console.log('Save was triggered');
// });
//
// user.trigger("change");
// user.trigger("save");

import axios from 'axios';

console.log('Hello from 13_LetsBuildWebFramework');

axios.post('http://localhost:3000/users', {
  name: 'myName',
  age: 20,
});

axios.get('http://localhost:3000/users/1');
