const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title, path: '/admin/add-product' });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: "Shop",
    path: '/shop',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  }); // Renders a template with the given template engine
};
