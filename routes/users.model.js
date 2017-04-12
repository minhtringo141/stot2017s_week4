'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('User', user, 'User');