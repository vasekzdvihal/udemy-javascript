import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const LOGIN_EMAIL = "hi@hi.com";
const LOGIN_PASSWORD = "password";

const router = Router();

router.get('/login', (req: RequestWithBody, res: Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === LOGIN_EMAIL && password === LOGIN_PASSWORD) {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password')
  }
});

export { router };
