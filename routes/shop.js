const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();




//__dirname will point to the folder you are currently in, if you want to point to a file in another folder, use ../
router.get('/', productsController.getProducts);

module.exports = router;
