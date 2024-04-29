import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({ name: 'Josh', age: 2002})
const root = document.getElementById('root');

// Type Guard!
// Method `getElementById` returns `HTMLElement | null, so there is possible null check
// if (root) is type guard, in that true brackets is behaving like HTMLElement and ignores possible null
if (root) {
  const userForm = new UserEdit(root, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}





