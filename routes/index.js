var auth = require('../auth');
var app = require('../app');

exports.view = function(req, res) {
	res.render('index');

  //twitter test API call
  app.T.get('search/tweets', { q: 'banana since:2011-11-11', count: 5 }, function(err, reply) {
    console.log(reply);
  })
}

exports.gallery = function(req, res) {
    res.render('gallery');
    //test api call...how to move this elsewhere?
    app.graph.get("zuck", function(err, res) {
      console.log(res); // { id: '4', name: 'Mark Zuckerberg'... }
    });

}