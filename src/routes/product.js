var express = require('express');
var router = express.Router();
const productController= require('../controllers/productController')


router.get('/produto/:slug', productController.index)

module.exports= router;