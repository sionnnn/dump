var http = require('http');
var https = require('https');
http.post = require('http-post');
var Twit = require('twit');
var FacebookAPI = require('./FacebookAPI');
var TwitterAPI = require('./TwitterAPI');
var ThinkAPI = require('./ThinkAPI');
var sessionId;
var Facebook = require('facebook-node-sdk');

var facebookAPI = new FacebookAPI();
var twitterAPI = new TwitterAPI();
twitterAPI.startStream();
twitterAPI.checkTweet({text:"whats on?",user:{screen_name:"test",location:"ncl"}});


var thinkAPI = new ThinkAPI();
thinkAPI.onReady(function(){
	console.log("READY " +thinkAPI.getSessionId())
	thinkAPI.sendMessage("whats on at the cinema",function(data){
		console.log(data);
	});
});

return false;

var FB = require('fb');
 
FB.api('oauth/access_token', {
    client_id: '882505318481314',
    client_secret: '33b2fd1668b7dc9eb99f4b4cb05db123',
	client_token:'bc4dffc22a5237430856ece1a1e8147d',
	user_token:'CAAMiokgFPaIBAOOrY3S2txBrDP6ZActFYzkqCy0w3dFZCdZCkADSyMW6Fw8rK5qKAGbrgRMQdFASM1VE7uxRvFytnwRDqPmYD7PqSDrvsZBfVLuB3NHXbLI6zRD8JEZAEbusGVDjhR7ByhDm0Xnb4TUntiKo9B0bXHaaOnZCnXfbAz24hPA74rL6VaRSeKJXfiCPX19vb3yilEtGFYIIZBi',
    grant_type: 'client_credentials'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }
    
	FB.setAccessToken('CAAMiokgFPaIBAOOrY3S2txBrDP6ZActFYzkqCy0w3dFZCdZCkADSyMW6Fw8rK5qKAGbrgRMQdFASM1VE7uxRvFytnwRDqPmYD7PqSDrvsZBfVLuB3NHXbLI6zRD8JEZAEbusGVDjhR7ByhDm0Xnb4TUntiKo9B0bXHaaOnZCnXfbAz24hPA74rL6VaRSeKJXfiCPX19vb3yilEtGFYIIZBi');


	var accessToken = FB.getAccessToken();
	FB.api(
    "/me/likes",
    function (response) {
      if (response && !response.error) {
		//console.log("movies??")
		//console.log(response)
      }
		else {
		//console.log("error")
		}
    });

	FB.api(
    "/me/video.wants_to_watch",
    function (response) {
      if (response && !response.error) {
		//console.log("movies??")
		console.log(response)
		console.log("~~~~~~~~~~~~~~~~~~~~~~~~~")
		console.log(response.data[0].id)
      }
		else {
		//console.log("error")
		}
    });

	FB.api('/10153010854461765', function (res) { //me
	  if(!res || res.error) {
	    console.log(!res ? 'error occurred' : res.error);
	    return;
	  }
	  //console.log(res.id);
	  //console.log(res.name);
	  //console.log(res);
	});

	/** POST ON WALL
	var obj = {
	    name: "Search Google",
	    link: "https://www.google.com",
	    picture: "https://www.google.co.uk/images/srpr/logo11w.png",
	    caption: "The world's most popular search engine"
	  }
		FB.api('10153010854461765/feed', 'post', obj, function (res) {
		  if(!res || res.error) {
		    console.log(!res ? 'error occurred' : res.error);
		    return;
		  }
		  console.log('Post Id: ' + res.id);
		});
		*/
		var obj = {
	        "message": "This is a test comment"
	    };
		FB.api('10153010667506765/comments', 'post', obj, function (res) {
		  if(!res || res.error) {
		    console.log(!res ? 'error occurred' : res.error);
		    return;
		  }
		  console.log('Post Id: ' + res.id);
		});

		
});




/*
var facebook = new Facebook({ appId: '882451501820029', secret: 'ecdeed7d748389db089f25a3962e8c0c' })
facebook.getAccessToken(function(resp) {
	//console.log("token resp "+resp)
});
facebook.setAccessToken(facebook.accessToken);
//console.log("token " + token);
console.dir(facebook.accessToken);

facebook.api('/me/', function(err, data) {
	console.log("facebook")
	console.log(err)
	console.log(data)
});
*/
return false;

//connect to thinkbot
http.post('http://thinkbot.azurewebsites.net/api/createsession', { inputSource: 'twitter_bot', Start: true }, function(res){
	console.log("connect to thinkbot");
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
		sessionId = JSON.parse(chunk).sessionId;
    });
});


function sendMessage(sessionId, tweet, location, callback){
	console.log("send tweet to thinkbot");

	var message = tweet + " " + location;

	console.log("MESSAGE: " + message)

	http.post('http://thinkbot.azurewebsites.net/api/sendinput', { input: message, sessionId: sessionId }, function(res){
	    res.setEncoding('utf8');
	    res.on('data', function(chunk) {
	        callback(JSON.parse(chunk));
	    });
	});
};

var T = new Twit({
    consumer_key:         'XnwhhKHwpTCo7B7qydrGYP5vt'
  , consumer_secret:      'aqhwcxCDjzHTQyrTmMN79MrAdei3oSWa582uV3nTGtDHNhndLb'
  , access_token:         '3376962327-fZHKgRFK7WhQsc7w1qIahRQy6IDXyJehswSB4i8'
  , access_token_secret:  'yZxDdazIhnlZwBpRSr31DJVF1QKpr0EsLpWFlmwSzjO52'
});
/**
function searchUser(id){

};

T.get('statuses/show/621603579539927040', { id: 12025932 },  function (err, data, response) {
  console.log(data)
})

return false;
*/

/**
http.get({
        host: 'https://api.twitter.com',
        path: '/1.1/statuses/show.json?id=621350194991472641'
    }, function(resp) {console.log(resp);});

*/


/**
T.get('statuses/show/', {user_id:12025932}, function (err, data, response) {
  //console.log(err);
  //console.log(data);
  console.log(data);
})

T.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 }, function(err, data, response) {
  console.log(data)
})
*/

/*
var thinkOfficeNCL = [-1.6937923,54.960055,-1.596931,55.0240558];
var streamOffice = T.stream('statuses/filter', { locations: thinkOfficeNCL });

streamOffice.on('tweet', function (tweet) {
	//console.log(tweet)
	console.log(tweet.place.name)
	console.log(tweet.place.bounding_box.coordinates[0][0])
	T.post('statuses/update', { status: '@' +tweet.screenName+' '}, function(err, data, response) {
		console.log(data)
	});
});*/

//12025932, 
var stream = T.stream('statuses/filter', { track:['@th_nk_bot'], follow:[12025932, 20234621] });
//var stream = T.stream('statuses/filter', { track:["hello"]})

function checkTweet(tweet, screenName, location, directTweet){
	//post to think bot
	console.log("check tweet");
	if(sessionId){
		sendMessage(sessionId, tweet, location, function(response){
			console.log("check for positive response");
			console.log(response)
			//var response = true;
			if(response && (response.IsPositive || directTweet)){
				console.log("post reply");
				console.log("REPLY: " + '@' +screenName+' '+ response.Content)
				T.post('statuses/update', { status: '@' +screenName+' '+ response.Content }, function(err, data, response) {
					console.log(data)
				});
			}
		});
	}
};

stream.on('tweet', function (tweet) {
	/*console.log(tweet)
	console.log(tweet.text);
	console.log(tweet.user.screen_name);
	console.log(tweet.user.location);
	console.log(tweet.geo);
	console.log(tweet.coordinates);
	console.log(tweet.place.bounding_box.coordinates);
	console.log(tweet.place.bounding_box.coordinates[0][0]);*/

	//console.log(tweet.text);
	//console.log(tweet.user.screen_name);
	//if(tweet.place) console.log(tweet.place.full_name);
	//console.log("****************************");
	var res = tweet.text.match(/cinema|movie|flick|pictures|film|big screen|silver screen/g);
	var reg = tweet.text.match(/(looking forward to( seeing this)?|excited about( seeing this)?|trying to decide if I want to( go)? see this|(can't|cant) wait for( this)?|hyped for( this)?|this (is|should|looks)( going| gonna)?( be| b)?( pretty)? (awesome|good|great|epic|worth a watch)) #([\w]+)/);
	var track = tweet.text.toLowerCase().indexOf("@th_nk_bot") != -1;

	if(!!res || !!reg || track){
		var loc = (tweet.place && tweet.place.full_name) ? tweet.place.full_name : tweet.user.location;
		checkTweet(tweet.text,tweet.user.screen_name,loc,track)
	}
});

//https://www.google.co.uk/maps/dir/54.971938,-1.6077482/Vue+Gateshead