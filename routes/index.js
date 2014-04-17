var auth = require('../auth');
var app = require('../app');

exports.view = function(req, res) {
	res.render('index');
 }

exports.fbpage = function(req, res) {
    //test api call facebook
    app.graph.get("/me?fields=feed", function(err, reply) {
      var tempArray = [];
      var storyArray = reply.feed.data;
      // console.log(storyArray[0].story);
      // console.log(JSON.stringify(res,  null, '\t')); // get my information as json
      // tempdata = JSON.stringify(res,  null, '\t');
      storyArray.map(function(item){
        var tempJSON = {}
        tempJSON.story = item.story;
        console.log(tempJSON.story);
        tempArray.push(tempJSON);
      });

      var data = {stories : tempArray};
      res.render('fbpage', data);
    });
}

exports.twitpage = function(req, res) {
    //  get user twitter feed test
    app.T.get('statuses/user_timeline', { count: 20 }, function(err, reply) {

        var testarray = [];
        reply.map(function(item){
            var tempJSON = {};
            tempJSON.text = item.text;
            testarray.push(tempJSON);
        });

        // console.log(testarray[0]);
        // console.log(testarray[1]);

        var data = {posts: testarray};
        res.render('twitpage', data);
    });
}

