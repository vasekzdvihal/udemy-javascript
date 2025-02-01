import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from "./decorators";

const LOGIN_EMAIL = "hi@hi.com";
const LOGIN_PASSWORD = "password";

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(`
      <form method="POST">
        <div>
          <label for="emails">Email</label>
          <input name="email">
        </div>
        <div>
          <label for="password">Password</label>
          <input name="password" type="password">
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === LOGIN_EMAIL && password === LOGIN_PASSWORD) {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password')
    }
  }
}
