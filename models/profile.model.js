const mongoose = require('mongoose');

const Profile = mongoose.model('Profile', {
    name: {
        type: String
    },
    address: {
        type: String
    },
    position: {
        type: String
    },
    salary: {
        type: String
    },
    dbo: {
        type: String
    },
});

module.exports = Profile // mongoose.model('Profile', profileSchema);