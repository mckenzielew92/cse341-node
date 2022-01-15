const path = require('path');

const express = require('express');

const rootDir = require('../utilities/path');

const router = express.Router();

const products = [];

//this is a different route than the one found on line 12 because it is using get and not post.
//reached under /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true});
});

//app.get will only work for incoming GET requests. Can also use app.post for only POST requests.
//there is also have delete patch, and put which are other filter words.
//reached under /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

router.use

exports.routes = router;
exports.products = products;