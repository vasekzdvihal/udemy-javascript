import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label for="email">Email</label>
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

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log (`Email: ${email}, password: ${password}`);
});

export { router };
