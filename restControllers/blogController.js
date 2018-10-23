var express = require('express');
var router = express.Router();
const Post = require('../models/blog');

router.get('/', function (req, res, next) {
  Post.find().then((data) => {
    console.log(data);
    res.send(data);
  });
});
router.get('/:id', function (req, res, next) {
  Post.findById(req.params.id).then((data) => {
    console.log(data);
    res.send(data);
  });
});
router.delete('/:id', function (req, res, next) {
  Post.findByIdAndDelete(req.params.id).then((data) => {
    console.log(data);
    res.send('Deleted Successfully...');
  });
});
router.post('/', function (req, res, next) {
  const post = new Post({
    bpId: 5,
    bpTitle: req.body.bpTitle,
    bpDescreption: req.body.bpDescreption
  });
  post.save().then((data) => {
    console.log('post saved');
    res.send('Added successfully..');
  });
});

router.put('/', function (req, res, next) {
  // const post = new Post({
  //   bpId: 2,
  //   bpTitle: 'first blog',
  //   bpDescreption: 'lorem ipsume'
  // });
  Post.findByIdAndUpdate(req.params.id).then(() => {
    console.log('post saved');
    res.send('Updated successfully...');
  });
});

module.exports = router;