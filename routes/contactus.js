var express = require('express');
var email = require('../helpers/emailDispatchers');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contactus', { title: 'Contact Us' }, function(){
    email.syaHello();
  });
});

module.exports = router;
