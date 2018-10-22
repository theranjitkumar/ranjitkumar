var express = require('express');
var email = require('../helpers/emailDispatchers');

var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('contactus', {
    title: 'Contact Us'
  });
  next();
}, function () {
  email.syaHello();
  email.dispatchMail();
});

module.exports = router;