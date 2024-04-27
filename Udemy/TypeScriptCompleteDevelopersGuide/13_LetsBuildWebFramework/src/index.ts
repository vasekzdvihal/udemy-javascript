import { User } from "./models/User";

console.log('Hello from 13_LetsBuildWebFramework');

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log (collection);
})

collection.fetch();
