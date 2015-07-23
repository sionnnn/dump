Modernizr.addTest(
	{
		'iOS': function(){
  			return /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
		},
		'iPhone': function(){	
			return /(.*iPhone.*Safari.*)/g.test(navigator.userAgent);
		}		
});