import { Collection } from "./models/Collection";

console.log('Hello from 13_LetsBuildWebFramework');

const collection = new Collection('http://localhost:3000/users');

collection.on('change', () => {
  console.log (collection);
})

collection.fetch();
