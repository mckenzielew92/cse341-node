const express = require('express');

const frontendController = require('../controllers/frontend');

const router = express.Router();

router.get('/frontend', frontendController.getFrontend);

module.exports = router;