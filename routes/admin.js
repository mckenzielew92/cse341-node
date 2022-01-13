const path = require('path');
const express = require('express');
const rootDir = require('../utilities/path');
const router = express.Router();

//this is a different route than the one found on line 12 because it is using get and not post.
//reached under /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//app.get will only work for incoming GET requests. Can also use app.post for only POST requests.
//there is also have delete patch, and put which are other filter words.
//reached under /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body); //need to add parser code from lines 4, and 8 to get this to work.
    res.redirect('/');
});

router.use

module.exports = router;