var express = require('express');
var router = express.Router();
const productController= require('../controllers/productController')
const finalizacaoController= require('../controllers/finalizacaoController')
const clienteController= require('../controllers/clienteController')
const admProdutoController=require('../controllers/admProdutoController')
const painelUsuarioController=require('../controllers/painelUsuarioController')

/* GET home page. */



/* GET internal product page. */

/* GET finalização  page. */
router.get('/finalizacao', finalizacaoController.index)

// painel do usuario page
router.get('/painel', painelUsuarioController.index)


/* GET clientes lista */
router.get('/clientes/lista', clienteController.listar)

// crud -sequelize admProduto 


//listar
router.get('/lista/produtos',admProdutoController.list)

//criar
router.get('/cadastrar',admProdutoController.create)

//salvar
router.post('/cadastrar',admProdutoController.store)

//alterar
router.get('/alterar/:id',admProdutoController.edit)
router.put('/alterar/:id',admProdutoController.update)

//deletar
router.delete('/deletar/:id',admProdutoController.destroy)







module.exports = router;
