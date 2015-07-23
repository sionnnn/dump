module.exports = {	    
    dist: {
        // [REQUIRED] Path to the build you're using for development. 
        "devFile" : "dev/modernizr-latest.js",
 
        // Path to save out the built file. 
        "outputFile" : "build/modernizr-custom.js",
 
        // Based on default settings on http://modernizr.com/download/ 
        "extra" : {
            "shiv" : true,
            "printshiv" : false,
            "load" : true,
            "mq" : false,
            "cssclasses" : true
        },
 
        // Based on default settings on http://modernizr.com/download/ 
        "extensibility" : {
            "addtest" : false,
            "prefixed" : false,
            "teststyles" : false,
            "testprops" : false,
            "testallprops" : false,
            "hasevents" : false,
            "prefixes" : false,
            "domprefixes" : false,
            "cssclassprefix": ""
        },
 
        // By default, source is uglified before saving 
        "uglify" : true,
 
        // Define any tests you want to implicitly include. 
        "tests" : [
        	'cssgradients',
        	'opacity',
        	'svg',
        	'touch'
        ],
 
        // By default, this task will crawl your project for references to Modernizr tests. 
        // Set to false to disable. 
        "parseFiles" : false,
 
        // When parseFiles = true, this task will crawl all *.js, *.css, *.scss and *.sass files, 
        // except files that are in node_modules/. 
        // You can override this by defining a "files" array below. 
        // "files" : { 
            // "src": [] 
        // }, 
 
        // This handler will be passed an array of all the test names passed to the Modernizr API, and will run after the API call has returned 
        // "handler": function (tests) {}, 
 
        // When parseFiles = true, matchCommunityTests = true will attempt to 
        // match user-contributed tests. 
        "matchCommunityTests" : false,
 
        // Have custom Modernizr tests? Add paths to their location here. 
        "customTests" : [
        	"dev/custom-tests/ios.js",
        	"dev/custom-tests/orientation.js",
        	"dev/custom-tests/mobile.js"
        ]
    }
    	 	
};