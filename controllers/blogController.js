const {BlogPost} = require('../models/blog');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ranjit');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // const post = new BlogPost({bpId: 1, bpTitle: 'first blog', bpDescreption: 'lorem ipsume'});
  // post.save().then(() => {
  //   console.log('post saved');
  // });
  res.render('blog', { title: 'Blog' });
});

module.exports = router;
