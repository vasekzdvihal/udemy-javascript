import { Request, Response } from 'express';
import { get, controller } from "./decorators";

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
}
