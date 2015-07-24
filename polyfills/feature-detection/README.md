#Feature detection

##Options

* head.js
* modernizr (https://github.com/Modernizr/Modernizr/)

For an example use [index.html](index.html), files are inserted at top comment in/out where required.

Both include an html5 elements Shim as standard.  
Both add css classes and populate a JS object to use for conditional CSS/JS.

##head.js 

Site: [here](http://headjs.com/)  

Offers 3 levels

1. Responsive detection (screen size, device type, browser type)   
2. Feature detection (limited)  
3. Conditional loading  

Not sure we need half the stuff it adds, maybe the mobile/ios classes.


##modernizr

1. Feature detection 
2. Conditional loading

Lots more features than head.js and is customisable, either online or using grunt with the [modulizr](https://github.com/spredfast/modernizr/tree/master/modulizr) system.

Custom build using [grunt-modernizr](https://www.npmjs.com/package/grunt-modernizr)

<code>
npm install grunt-modernizr
</code>

Just define what test you want as an array, for [a list of available tests](Available tests https://github.com/Modernizr/modernizr.com/blob/gh-pages/i/js/modulizr.js#L15-157) use the modernizr wiki.

Uses copy in dev folder as base to generate file into build folder.

Modernizr out of choice does not browser sniff, there may be some requirement for this and this can be handled by adding custom tests, I've added some examples for:

1. iOS/iPhone  
2. Mobile browsers 
3. Orientation (onload, would need work for resize etc)  

Suggest these are stored in seperate JS files and called when required, similar to how modernizr does it.

It is then possible to use [yepnope syntax to load](http://modernizr.com/docs/#load) polyfills etc if required. Though this is being [deprecated](https://github.com/SlexAxton/yepnope.js#deprecation-notice) in favour of amd style systems.

###With Require.js

Once the grunt file is created we can then use the resulting Modernizr build like any other AMD dependency whenever we need it, [this comes from stu cox](https://github.com/Modernizr/Modernizr/issues/1017) who actually wrote modernizr

<code>
define(['build/modernizr.custom.js'], function (Modernizr) {  
    if (Modernizr.svg) {  
        ...  
    }  
});  
</code>

or use a shim config

<code>
requirejs.config({
	paths: {  
        	'Modernizr': 'build/modernizr.custom.js'  
    	}  
	shim: {  
        	'Modernizr': {  
            		exports: 'Modernizr'  
        	}  
    	}  
})  

define(['Modernizr'],function(Modernizr) {
    'use strict';
    
    if (!Modernizr.svg) {
        require(["polyfills/some-svg-polyfill.js"], function(){
            ...
        });  
    }
}
</code>

