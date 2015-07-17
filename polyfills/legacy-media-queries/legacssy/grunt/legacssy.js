module.exports = {	
    	dist: {
      		options: {
       			// Include only styles for a screen 800px wide
        		legacyWidth: 1024,
            //overridesOnly: true
      		},
      		files: {
        		'css/legacy-main.css': 'css/main.css',
            'css/legacy-anglian.css': 'css/anglian.css'
      		},
    	},  	
};