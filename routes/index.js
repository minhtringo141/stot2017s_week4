var express = require('express');
var router = express.Router();
var User = require('./users.model');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

router.get('/userlist', function(req, res) {
    User.find().exec(function(err, data) {
        if (err) console.log(err)
        res.render('userlist', {
            "userlist": data
        });
    });
})

router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

router.post('/adduser', function(req, res) {
    var newUser = {
        username: req.body.username,
        email: req.body.useremail
    };

    User.create(newUser, function(err, data) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        } else {
            // And forward to success page
            res.redirect("userlist");
        }
    });

});
module.exports = router;