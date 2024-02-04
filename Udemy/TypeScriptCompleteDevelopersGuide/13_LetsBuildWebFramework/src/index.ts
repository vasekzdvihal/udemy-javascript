import { User } from "./models/User";


console.log('Hello from 13_LetsBuildWebFramework');

const user = new User({ name: 'brand new record', age: 2344234 });

user.events.on('change', () => {
  console.log('Changed #1');
});

user.events.trigger("change");
