
Modernizr.addTest("mobile", function(){
	var ua = navigator.userAgent.toLowerCase()

	return /mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/g.test(ua);

});