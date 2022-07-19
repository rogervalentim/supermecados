var express = require('express');
var router = express.Router();
const homeController= require('../controllers/homeController')
const productsController= require('../controllers/productsController')
const productController= require('../controllers/productController')
const finalizacaoController= require('../controllers/finalizacaoController')
const carrinhoController= require('../controllers/carrinhoController')
const clienteController= require('../controllers/clienteController')
const admProdutoController=require('../controllers/admProdutoController')
//const cadastrarProdutoController=require('../controllers/cadastrarProdutoController')

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

/* GET admProduto page.  */
router.get('/administrar/produto', admProdutoController.index)

/* GET cadastrarProduto page.  */
router.get('/cadastrar/produto', admProdutoController.create)

// POST localhost:3000/user/create
router.post(
  "/cadastrar/produto",
  
  admProdutoController.store
);

// GET localhost:3000/user/edit/1
router.get("/edit/:id", admProdutoController.edit);
// PUT localhost:3000/user/edit/1
router.put("/edit/:id", admProdutoController.update);
// PATCH localhost:3000/user/edit/1
router.patch("/edit/:id", admProdutoController.update);

// GET localhost:3000/user/delete/1
router.get("/delete/:id", admProdutoController.delete);
// DELETE localhost:3000/user/delete/1
router.delete("/delete/:id", admProdutoController.destroy);

// GET localhost:3000/user/
router.get("/table", admProdutoController.index);
// GET localhost:3000/user/4
router.get("/:id", admProdutoController.show);





module.exports = router;
