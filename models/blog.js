const mongoose = require('mongoose');

const Post = mongoose.model('BlogPost', {
    bpId: {
        type: Number,
    },
    bpTitle: {
        type: String,
    },
    bpDescreption: {
        type: String,
    },

});

module.exports = Post;