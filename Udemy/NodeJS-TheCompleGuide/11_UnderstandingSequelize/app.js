const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Load middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Add default user into all requests so we can use it later
app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.error(err));
})

// Define routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// DB Relations
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

// APP START
sequelize
  //.sync({ force: true })
  .sync() // Sync DB (create tables, ect...)
  .then(result => { // Try find default user
    console.log(`Database lodaded.`);

    console.log('Looking for default user.')
    return User.findByPk(1); 
  })
  .then(user => { // Creating default user if not exists
    if (!user) {
      console.log('Creating default user.')
      return User.create({ name: 'Vasa', email: 'test@test.com' });
    }
    return user;
  }) 
  .then((user) => { // Create cart for default user (just one)
    return user.getCart().then((cart) => {
      if (!cart) {
        return user.createCart();
      }
      return cart;
    });
  })
  .then(cart => { // Starting app on port
    console.log('App will listen on port 3000!')
    app.listen(3000); 
  })
  .catch(error => {
    console.log(error);
  });
