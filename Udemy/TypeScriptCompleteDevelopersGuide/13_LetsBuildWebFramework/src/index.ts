import { User } from "./models/User";


console.log('Hello from 13_LetsBuildWebFramework');

const user = new User({ id: 1 });

user.fetch();

console.log(user.get('name'));

setTimeout(() => {
  console.log(user.get('name'));
}, 4000);
