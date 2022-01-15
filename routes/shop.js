const path = require('path');
const express = require('express');
const rootDir = require('../utilities/path');
const router = express.Router();

const adminData = require('./admin');


//__dirname will point to the folder you are currently in, if you want to point to a file in another folder, use ../
router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});

module.exports = router;
