var http = require('http');
http.post = require('http-post');

var ThinkAPI = module.exports = function(){
	this.sessionId = "";
	this.ready = false;
	this.path = 'http://thinkbot.azurewebsites.net/api';
	this.sourceApp = 'twitter_bot';

	var that = this;

	http.post(
	this.path+'/createsession', 
	{ inputSource: this.sourceApp, Start: true }, 
	function(res){
	    res.setEncoding('utf8');
	    res.on('data', function(chunk) {
			//console.log(JSON.parse(chunk).sessionId);
			that.sessionId = JSON.parse(chunk).sessionId;
			that.ready = true;
	    });
	});
}

ThinkAPI.prototype.getSessionId = function(){
	return this.sessionId;
}

ThinkAPI.prototype.sendMessage = function(message, callback){
	http.post(
	this.path+'/sendinput', 
	{ input: message, sessionId: this.getSessionId() }, 
	function(res){
	    res.setEncoding('utf8');
	    res.on('data', function(chunk) {
	        callback(JSON.parse(chunk));
	    });
	});
}