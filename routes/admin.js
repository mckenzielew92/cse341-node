const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();

//this is a different route than the one found on line 12 because it is using get and not post.
//reached under /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

//app.get will only work for incoming GET requests. Can also use app.post for only POST requests.
//there is also have delete patch, and put which are other filter words.
//reached under /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

router.use

module.exports = router;