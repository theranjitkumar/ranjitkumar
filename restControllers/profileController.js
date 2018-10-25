var express = require('express');
var router = express.Router();
const Profile = require('../models/profile.model');

router.post('/', (req, res, next) => {
    const profile = new Profile({
        name: 'Ranjit kumar',
        address: 'Gurugram, Hariyana',
        position: 'Sr. Software Developer',
        salary: '******',
        dbo: '02/02/1983'
    });
    profile.save((err) => {
        if (err) res.send(err);
        console.log('Profile added successfully...');
        res.json('Profile added successfully...');
    });

});

router.get('/', (req, res, next) => {
    Profile.find().then((data) => {
        console.log(data);
        res.send(data);
    });
});

module.exports = router;