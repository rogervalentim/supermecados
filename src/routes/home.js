var express = require('express');
var router = express.Router();
const homeController= require('../controllers/homeController');

// home Page
router.get('/',homeController.index)

module.exports = router;
