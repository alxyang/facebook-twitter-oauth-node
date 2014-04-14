var auth = require('../auth');
var app = require('../app');

exports.view = function(req, res) {
	res.render('index');
}

exports.gallery = function(req, res) {
    res.render('gallery');
}