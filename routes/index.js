var auth = require('../auth');
var app = require('../app');

exports.view = function(req, res) {
	res.render('index');
 }

exports.fbintro = function(req, res) {
    res.render('fbintro');
 }

 exports.twitintro = function(req, res) {
    res.render('twitintro');
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

	var finalData = null,
		screen_name = null,
		posts = null;

	//  get username of current user
    app.T.get('account/verify_credentials', function(err, reply) {
    	screen_name = reply.screen_name;
    	complete();
    });

    //  get user twitter feed test
    app.T.get('statuses/user_timeline', { count: 20 }, function(err, reply) {

        var testarray = [];
        reply.map(function(item){
            var textArr = {};
            textArr.text = item.text;
            testarray.push(textArr);
        });

        posts = testarray;
        complete();
    });

    // check to make sure that async calls are made before final render
    function complete() {
    	if(screen_name !== null && posts !== null) {
    		finalData = {'posts': posts, 'screen_name': screen_name};
    		res.render('twitpage', finalData);
    	}
    }
}

