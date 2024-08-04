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

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `)
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `)
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined; // reset session
  res.redirect('/');
});

export { router };
