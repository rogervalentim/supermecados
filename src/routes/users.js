var express = require('express');
var router = express.Router();

const admClienteController=require('../controllers/admClienteController')
const {Cliente} = require("../../database/models");


/* GET login. */
router.get('/', function(req, res, next) {
  if(req.session.login){
    res.render('users/index')
  }else{
    res.redirect('/users/login')
  }

});

/* GET login. */
router.get('/login', function(req, res, next) {
  res.render('users/login');
});

/* POST login. */
router.post('/login', async function(req, res, next) {

  const cliente = await Cliente.findAll({
    where: {
      email: req.body.user_email,
      senha: req.body.user_password,
      ativo: 1
    }
  })

  if (cliente.length > 0) {
    // Logado com sucesso
      let message = "Logado com sucesso!" ;
      let type = "success" ;

      user = req.body.user_email;
      res.render('users/index', {user:user, message, type})
  }else{
    let message = "Falha ao logar, verifique se os dados estão corretos" ;
    let type = "danger" ;
    
    res.render('users/login', {message, type})
  }

});

/* GET Logout */
router.get('/logout', (req, res) => {
  if (req.session.login) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Não foi possível fazer logout: ' + err)
      } else {
        res.redirect('/users')
      }
    })
  }else{
    res.redirect('/users')
  }
})

//criar
router.get('/cadastrar',admClienteController.create)

// salvar
router.post('/cadastrar',admClienteController.store)

// Perfil
router.get('/perfil/:id',admClienteController.edit)
router.put('/alterar/:id',admClienteController.update)

// deletar
router.delete('/deletar/:id',admClienteController.destroy)

module.exports = router;
