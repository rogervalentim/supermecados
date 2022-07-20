var express = require('express');
var router = express.Router();
const homeController= require('../controllers/homeController')
const productsController= require('../controllers/productsController')
const productController= require('../controllers/productController')
const finalizacaoController= require('../controllers/finalizacaoController')
const carrinhoController= require('../controllers/carrinhoController')
const clienteController= require('../controllers/clienteController')
const admProdutoController=require('../controllers/admProdutoController')

/* GET home page. */
router.get('/',homeController.index)

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

// crud -sequelize admProduto 
router.get('/cadastrar',admProdutoController.create)
router.get("/lista", admProdutoController.listar)
router.get('/cadastrar',admProdutoController.store)

//router.get('/:id', admProdutoController.findById)








module.exports = router;
