var FB = require('fb');

var FacebookAPI = module.exports = function(){

	this.accessToken = 'CAACEdEose0cBAOhbWAbvRGYRH6BKSuTz33yfOVnpUNhlVAH9FObYAw48WaSWc9LgpBMW9mTbQiZAaogLZBbSvyPO9kZCthUKwL6j3NJ3EU0RUT4QblzVW8uwdjEtcO3eyRilndZAtaEZCklc3ds0d6dhldVLg30BwjdqCZBVz2HKBDZCuEZB4rfQkVXWgiZBiJWn1GHLMz20JC23eqrR1hWlw';
	this.ready = false;

	var that = this;
	FB.api('oauth/access_token', {
	    client_id: '882505318481314',
	    client_secret: '33b2fd1668b7dc9eb99f4b4cb05db123',
		client_token:'bc4dffc22a5237430856ece1a1e8147d',
		user_token: this.accessToken,
	    grant_type: 'client_credentials'
	}, 
	function (resp) {
	    if(!resp || resp.error) {
	        console.log(!resp ? 'error occurred' : resp.error);
	        return;
	    }
		that.onReady(resp);
	});

	FB.setAccessToken(this.accessToken);

}

FacebookAPI.prototype.onReady = function(resp){
	this.ready = true;
}

FacebookAPI.prototype.getWantsToWatch = function(callback){
	FB.api(
    "/me/video.wants_to_watch",
    function (response) {
		if (response && !response.error) {
			var title = (response && response.data && response.data[0] && response.data[0].data && response.data[0].data.movie && response.data[0].data.movie.title) ? response.data[0].data.movie.title : null;
			callback(title);
		}
		else {
			callback(response.error);
		}
    });
}