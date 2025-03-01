const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const errorController = require('/controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); // views is default, but this is how you would change it

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404)

app.listen(3000); // Starts a server on port 3000 => http://localhost:3000/
