const mongoose = require('mongoose');

const BlogPost = mongoose.model('BlogPost', {
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

module.exports = BlogPost;