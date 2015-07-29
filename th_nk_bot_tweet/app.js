
userC = null;
userQ = null;
userRespId = null;

var FacebookAPI = require('./FacebookAPI');
var TwitterAPI = require('./TwitterAPI');
//var ThinkAPI = require('./ThinkAPI');
var BrainTrain = require('./BrainTrain');

var prompt = require('prompt');


/*

thinkAPI.onReady(function(){
	console.log("READY " +thinkAPI.getSessionId())
	thinkAPI.sendMessage("whats on at the cinema",function(data){
		console.log(data);
	});
});

*/

var nowShowing = ['Minions','Ant-Man','Ted 2','Jurassic World','Terminator Genisys'];

var App = function(){
	//this.think = new ThinkAPI();
	this.twitter = new TwitterAPI();
	this.facebook = new FacebookAPI();
	this.brainTrain = new BrainTrain();

	this.useThinkBot = false;
	this.cmd = false;
};

App.prototype.onReady = function(){
	var that = this;
	var readyInterval = setInterval(function(){
		if(/*that.think.ready &&*/ that.twitter.ready && that.facebook.ready){
			clearInterval(readyInterval);
			that.init();
		}
	}, 50);
}

App.prototype.init = function(){
	this.twitter.startStream();
	var that = this;

	this.twitter.getCategory = function(tweet){ return that.getCategory(tweet); };
	this.twitter.getResponseMessage = function(tweet, category){ return that.getResponseMessage(tweet, category); };
	this.twitter.createMessage = function(tweet, tweetTracked, category, message){ return that.createMessage(tweet, tweetTracked, category, message); };
	
	//dummy
	/*
	app.twitter.checkTweet({
		text:"eek, where the hells the cinema?? #lost", 
		user:{
			screen_name:"test", 
			location:"Gateshead"
		}
	});

	app.twitter.checkTweet({
		text:"whats should i go see tonight? #cinema", 
		user:{
			screen_name:"test", 
			location:"Gateshead"
		}
	});

	app.twitter.checkTweet({
		text:"anyone seen anything good at the flicks lately???", 
		user:{
			screen_name:"test", 
			location:"Gateshead"
		}
	});
	*/
/*
	app.twitter.checkTweet({
		text:"anyone know whats on at the cinema?", 
		user:{
			screen_name:"test", 
			location:"Gateshead"
		}
	});
*/
	app.twitter.checkTweet({
		text:"i fancy seeing a film tomoro!", 
		user:{
			screen_name:"test", 
			location:"Gateshead"
		}
	});
	if(this.cmd) {
		prompt.start();
		this.showPrompt();
	}
}

App.prototype.showPrompt = function(){
	prompt.get(['tweet'], function (err, result) {
		//console.log('Command-line input received:');
		//console.log('  tweet: ' + result.tweet);

		app.twitter.checkTweet({
			text:result.tweet, 
			user:{
				screen_name:"test", 
				location:"Gateshead"
			}
		});
	});
}

App.prototype.getCategory = function(tweet){
	var category = this.brainTrain.getCategory(tweet.text);
	userC = category;
	return category;
}

App.prototype.createMessage = function(tweet, tweetTracked, category, message){
	var that = this;
	var whats_on_recommend = "you wanted to watch {$recommend_title}? thats on at {$location} cinema!";

	if(category == "recommend"){
		this.facebook.getWantsToWatch(function(title){
			if(title && nowShowing.indexOf(title)) {
				message = message.replace("{$recommend_title}",title);
			}
			else {
				var rand = Math.round(Math.random()*4);
				message = message.replace("{$recommend_title}", nowShowing[rand]);
			}
			
			that.postTweet(tweet, tweetTracked, category, message, title);
		});
	};

	if(category == "location"){
		that.postTweet(tweet, tweetTracked, category, message, null);
	};

	if(category == "whatsOn"){
		this.facebook.getWantsToWatch(function(title){
			if(title && nowShowing.indexOf(title) != -1) {
				var ns = nowShowing.slice(0);
				ns.splice(nowShowing.indexOf(title),1);
				message = whats_on_recommend.replace("{$recommend_title}",title)/*.replace("{$now_showing}",ns.join(', '))*/.replace("{$location}",that.getTweetLocation(tweet));
			}
			else {
				message = message.replace("{$now_showing}",nowShowing.join(', '));
			}
			that.postTweet(tweet, tweetTracked, category, message, null);
		});
	};

	/*
	if(category == "whatsOn" || category == "recommend"){
		this.facebook.getWantsToWatch(function(title){
			if(title && nowShowing.indexOf(title)) {
				var ns = nowShowing.slice(0);
			}
		});
	};
	*/
}

App.prototype.postTweet = function(tweet, tweetTracked, category, message, title){
	//console.log("CATEGORY "+category );

	if(this.cmd) {
		console.log('RESPONSE: @' +tweet.user.screen_name+' '+ message)
		//this.brainTrain.classify("latest releases? #cinema","whatsOn");
		this.showPrompt();
		return false;
	};

	this.twitter.postMessage(tweet, tweetTracked, category, message);

}

App.prototype.getTweetLocation = function(tweet){
	return (tweet.place && tweet.place.full_name) ? tweet.place.full_name : tweet.user.location;
}

App.prototype.getResponseMessage = function(tweet, category){
	var location = this.getTweetLocation(tweet);

	switch(category){
		case "whatsOn":
			message = "{$now_showing} are on at {$location}";
			break;
		
		case "location":
			message = "heres directions to your nearest cinema https://www.google.co.uk/maps/dir/{$location}/Vue+Cinema";
			break;

		case "recommend":
			message = "what about {$recommend_title}? its on at {$location} cinema";
			break;

		case "whatsOn_recommend":
			message = "you wanted to watch {$recommend_title}? thats on at {$location} cinema! its also showing {$now_showing}";
			break;

		default:
			message = "erm?";
	};

	return message.replace('{$location}', location);
}

app = new App();
app.onReady();