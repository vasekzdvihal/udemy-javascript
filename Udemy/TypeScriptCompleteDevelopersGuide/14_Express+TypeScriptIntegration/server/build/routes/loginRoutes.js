"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const LOGIN_EMAIL = "hi@hi.com";
const LOGIN_PASSWORD = "password";
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
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
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === LOGIN_EMAIL && password === LOGIN_PASSWORD) {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
