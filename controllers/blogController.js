var express = require('express');
var router = express.Router();
const Post = require('../models/blog.model');

router.get('/', function (req, res, next) {
  Post.find().then((data) => {
    console.log(data);
  });
  res.render('blog', {
    title: 'Blog'
  });
});
router.get('/:id', function (req, res, next) {
  Post.findById().then((data) => {
    console.log(data);
  });
  res.render('blog', {
    title: 'Blog'
  });
});
router.delete('/:id', function (req, res, next) {
  Post.findById().then((data) => {
    console.log(data);
  });
  res.render('blog', {
    title: 'Blog'
  });
});
router.post('/', function (req, res, next) {
  const post = new Post({
    bpId: 2,
    bpTitle: 'first blog',
    bpDescreption: 'lorem ipsume'
  });
  post.save().then(() => {
    console.log('post saved');
  });
  res.render('blog', {
    title: 'Blog'
  });
});

router.put('/', function (req, res, next) {
  const post = new Post({
    bpId: 2,
    bpTitle: 'first blog',
    bpDescreption: 'lorem ipsume'
  });
  post.save().then(() => {
    console.log('post saved');
  });
  res.render('blog', {
    title: 'Blog'
  });
});

module.exports = router;