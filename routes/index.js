var auth = require('../auth');

exports.view = function(req, res) {
	res.render('index');
}

exports.gallery = function(req, res) {
    res.render('gallery');
}