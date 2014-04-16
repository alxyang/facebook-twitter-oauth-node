var auth = require('../auth');
var app = require('../app');

exports.view = function(req, res) {
	res.render('index');
 }

exports.gallery = function(req, res) {
    res.render('gallery');
    //test api call facebook
    app.graph.get("/me?fields=feed", function(err, res) {
      console.log(JSON.stringify(res,  null, '\t')); // get my information as json
    });
   
   //
    //  get user twitter feed test
    //
    // app.T.get('statuses/user_timeline', { count: 2 }, function(err, reply) {
    //   console.log(reply);
    // })

}