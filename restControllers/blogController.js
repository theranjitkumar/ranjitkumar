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
    console.log('Deleted Successfully...');
    res.send('Deleted Successfully...');
  });
});
router.post('/', function (req, res, next) {
  const post = new Post({
    bpId: 5,
    bpTitle: req.body.bpTitle || 'Untield Title',
    bpDescreption: req.body.bpDescreption || 'Untield Descreption...'
  });
  post.save().then((data) => {
    console.log('Added successfully..');
    res.send('Added successfully..');
  });
});

router.put('/:id', function (req, res, next) {
  Post.findByIdAndUpdate(req.params.id, {
    bpId: 2,
    bpTitle: req.body.bpTitle || 'Untield updated title',
    bpDescreption: req.body.bpDescreption || 'Untield updated dDescreption...'
  }, {
    new: true
  }).then(() => {
    console.log('Updated successfully...');
    res.send('Updated successfully...');
  });
});

module.exports = router;