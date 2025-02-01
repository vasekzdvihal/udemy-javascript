import { UserEdit } from "./views/UserEdit";
import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { UserList } from "./views/UserList";

const user = User.buildUser({ name: 'Josh', age: 2002})
const root = document.getElementById('root');

// -----------
// Show + Form
// -----------

// Type Guard!
// Method `getElementById` returns `HTMLElement | null, so there is possible null check
// if (root) is type guard, in that true brackets is behaving like HTMLElement and ignores possible null
if (root) {
  const userForm = new UserEdit(root, user);
  // userForm.render(); // Uncomment when you want see show and form
} else {
  throw new Error('Root element not found');
}

// ---------
// User List
// ---------
const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
      return User.buildUser(json);
    }
  );

users.on('change', () => {
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
