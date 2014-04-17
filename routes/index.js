var auth = require('../auth');
var app = require('../app');

exports.view = function(req, res) {
	res.render('index');
 }

exports.fbpage = function(req, res) {
    var tempdata;
    //test api call facebook
    app.graph.get("/me?fields=feed", function(err, res) {
      console.log(JSON.stringify(res,  null, '\t')); // get my information as json
      tempdata = JSON.stringify(res,  null, '\t');
    });
    var data = {rdata : tempdata};
    res.render('fbpage', data);
}

exports.twitpage = function(req, res) {
    //  get user twitter feed test
    app.T.get('statuses/user_timeline', { count: 2 }, function(err, reply) {

        var testarray = [];
        reply.map(function(item){
            var tempJSON = {};
            tempJSON.text = item.text;
            testarray.push(tempJSON);
        });

        // console.log(testarray[0]);
        // console.log(testarray[1]);

        var data = {rdata: "herp", tdata: "derp", posts: testarray};
        res.render('twitpage', data);
    })
}

