var express = require('express');
var router = express.Router();
const mainController= require('../controllers/mainController')
const productsController= require('../controllers/productsController')
const productController= require('../controllers/productController')
const finalizacaoController= require('../controllers/finalizacaoController')
const carrinhoController= require('../controllers/carrinhoController')
const clienteController= require('../controllers/clienteController')

/* GET home page. */
router.get('/',mainController.index)

/* GET products page. */
router.get('/produtos', productsController.index)

/* GET internal product page. */
router.get('/produto/:slug', productController.index)

/* GET finalização  page. */
router.get('/finalizacao', finalizacaoController.index)

/* GET carrinho page. */
router.get('/carrinho',carrinhoController.index)

/* GET clientes lista */
router.get('/clientes/lista', clienteController.listar)

module.exports = router;
