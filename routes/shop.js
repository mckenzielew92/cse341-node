const path = require('path');
const express = require('express');
const rootDir = require('../utilities/path');
const router = express.Router();

//__dirname will point to the folder you are currently in, if you want to point to a file in another folder, use ../
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); //path join will automatically build the path with linex systems and windows. You will not need to use / in your path. just add each segment.
});

router.use

module.exports = router;
