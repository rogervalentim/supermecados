var express = require('express');
var router = express.Router();

/* GET login. */
router.get('/', function(req, res, next) {
  if(req.session.login){
    res.render('users\\index')
  }else{
    res.redirect('/users/login')
  }

});

/* GET login. */
router.get('/login', function(req, res, next) {
  res.render('users\\login');
});

router.post('/login', function(req, res, next) {

  // TODO:Substituir por busca no banco
  var login = 'teste';
  var password = '123';

  if (req.body.user_email == login && req.body.user_password == password) {
      // Logado com sucesso
      user = req.body.user_email;
      res.render('users\\index', {user:user})
  }else{
    res.render('users\\login')
  }

});

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

module.exports = router;
