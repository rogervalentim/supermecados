var express = require('express');
var router = express.Router();
const mainController= require('../controllers/mainController')
const productsController= require('../controllers/productsController')
const productController= require('../controllers/productController')

/* GET home page. */
router.get('/',mainController.index)

/* GET products page. */
router.get('/produtos', productsController.index)

/* GET internal product page. */
router.get('/produto/:slug', productController.index)

module.exports = router;
