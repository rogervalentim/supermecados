var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('users\\login');
});

router.post('/login', function(req, res, next) {
  res.render('index');
});

module.exports = router;
