const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.error(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

sequelize
  //.sync({ force: true })
  .sync()
  .then(result => {
    console.log(`Database lodaded.`);

    console.log('Looking for default user.')
    return User.findByPk(1); 
  })
  .then(user => {
    if (!user) {
      console.log('Creating default user.')
      return User.create({ name: 'Vasa', email: 'test@test.com' });
    }
    return user;
  }) 
  .then(user => {
    console.log('App will listen on port 3000!')
    app.listen(3000);  
  })
  .catch(error => {
    console.log(err);
  });
