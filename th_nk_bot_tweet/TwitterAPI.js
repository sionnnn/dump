var Twit = require('twit');
var sentiment = require('sentiment');

var TwitterAPI = module.exports = function(){
	this.followIds = [12025932, 20234621, 213395732];
	this.trackNames = ['@th_nk_bot'];/*'@th_nk_bot'*/
	var re1 = /cinema|movie|flick|pictures|film|big screen|silver screen|test/g,
		re2 = /(looking forward to( seeing this)?|excited about( seeing this)?|trying to decide if I want to( go)? see this|(can't|cant) wait for( this)?|hyped for( this)?|this (is|should|looks)( going| gonna)?( be| b)?( pretty)? (awesome|good|great|epic|worth a watch)) #([\w]+)/;
	this.rePatterns = [re1];

	this.stream = null;

	this.twit = new Twit({
	    consumer_key:         'XnwhhKHwpTCo7B7qydrGYP5vt'
	  , consumer_secret:      'aqhwcxCDjzHTQyrTmMN79MrAdei3oSWa582uV3nTGtDHNhndLb'
	  , access_token:         '3376962327-fZHKgRFK7WhQsc7w1qIahRQy6IDXyJehswSB4i8'
	  , access_token_secret:  'yZxDdazIhnlZwBpRSr31DJVF1QKpr0EsLpWFlmwSzjO52'
	});

	this.ready = true;
}

TwitterAPI.prototype.startStream = function(){
	this.stream = this.twit.stream('statuses/filter', { track:this.trackNames, follow:this.followIds });

	var that = this;
	this.stream.on('tweet', function(tweet){ 
		that.checkTweet(tweet); 
	});

	return this;
}

function getAlternatives(type)
{
	var alts = "";
	switch(type){
		case "location":
			alts = "oops, did you want to know whats on? or to get a recommendation?";
			break
		
		case "whatsOn":
			alts = "oops, did you want to get a recommendation? or directions?";
			break
		
		case "recommend":
			alts = "oops, did you want to know whats on? or directions?";
			break
	}
	return alts
}

TwitterAPI.prototype.checkTweet = function(tweet){

	var tweetText = tweet.text.toLowerCase();
	var tweetTracked = false;
	for(var i=0,il=this.trackNames.length;i<il;i++){
		if(tweetText.indexOf(this.trackNames[i]) != -1) tweetTracked = true;
	};

	/*
	1. latest releases? #cinema
	2. @th_nk_bot thats not what i wanted?
	3. oops, did you want to know ["whats on?","to get a recommendation"]
	4. 
	*/
	if(tweet.user.screen_name == "th_nk_bot") return false;

	//console.log("userC " + userC);
	
	if(userRespId){
		userRespId = null;
		this.categoriseMessage(tweet, true, true);
		return false;
	}

	if(tweetTracked && tweet.in_reply_to_screen_name == "th_nk_bot" && userQ) {
		var response = sentiment(tweetText);
		//console.dir("response sentiment "+response.comparative+" "+response.score);
		if(response.comparative>0 && response.score>0){
			console.log("POSITVE");
		}
		else {
			//NEGATIVE oops...
			this.twit.post('statuses/update', 
			{ 
				status: '@' +tweet.user.screen_name+' '+ getAlternatives(userC), 
				in_reply_to_status_id: tweet.id_str
			}, 
			function(err, data, response) {
				//console.log(data)
			})
			//in_reply_to_status_id: tweet.id_str
			userRespId = tweet.id_str;
		};

		return false;
	}

	userRespId = null;
	userC = null;
	userQ = tweetText;

	var tweetMatch = false;

	for(var i=0,il=this.rePatterns.length;i<il;i++){
		if(tweetText.match(this.rePatterns[i])) tweetMatch = true;
	};
//console.log(tweetText)

	if(tweetMatch || tweetTracked) this.categoriseMessage(tweet, tweetTracked);

	return false;
}

TwitterAPI.prototype.getCategory = function(tweet){ return "whatsOn"; };

TwitterAPI.prototype.getResponseMessage = function(tweet, category){
	switch(category){
		case "whatsOn":
			message = "x y z is on at";
			break;
		
		case "location":
			message = "the location is x ";
			break;

		case "recommend":
			message = "i can recommend x y z";
			break;

		default:
			message = "erm?";
	};
	return message;
}

TwitterAPI.prototype.categoriseMessage = function(tweet, tweetTracked, reclassify){

	var category = this.getCategory(tweet); //whatsOn location recommend
	//console.log("CAT "+category)
	if(reclassify) {
		app.brainTrain.classify(userQ, category);
		userQ = null;
	}

	var message = this.getResponseMessage(tweet, category);

	this.createMessage(tweet, tweetTracked, category, message);

	return false;
}

TwitterAPI.prototype.createMessage = function(tweet, tweetTracked, category, message){
	this.postMessage(tweet, tweetTracked, category, message);
}

TwitterAPI.prototype.postMessage = function(tweet, tweetTracked, category, message){

	var location = (tweet.place && tweet.place.full_name) ? tweet.place.full_name : tweet.user.location;
	var userName = tweet.user.screen_name;
	
	//console.log(tweet)
	//console.log(tweet.id + ' RESPONSE: @' +userName+' '+ message)

	//return false;

	this.twit.post('statuses/update', 
	{ 
		status: '@' +userName+' '+ message, 
		in_reply_to_status_id: tweet.id_str
	}, 
	function(err, data, response) {
		//console.log(data)
	});

}