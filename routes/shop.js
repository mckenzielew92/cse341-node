const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();


//__dirname will point to the folder you are currently in, if you want to point to a file in another folder, use ../
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
