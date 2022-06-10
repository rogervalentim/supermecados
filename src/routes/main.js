var express = require('express');
var router = express.Router();
const mainController= require('../controllers/mainController')
const productsController= require('../controllers/productsController')

/* GET home page. */
router.get('/',mainController.index)

/* GET products page. */
router.get('/produtos', productsController.index)

module.exports = router;
