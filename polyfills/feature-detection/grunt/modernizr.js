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
            // 'a_download',
            // 'audio_audiodata_api',
            // 'audio_webaudio_api',
            // 'backgroundsize',
            // 'battery_api',
            // 'battery_level',
            // 'blob-constructor',                
            // 'borderimage',
            // 'borderradius',
            // 'boxshadow',
            // 'canvastext',
            // 'canvas_todataurl_type',
            // 'contenteditable',
            // 'contentsecuritypolicy',                
            // 'contextmenu',
            // 'cookies',
            // 'cors',
            // 'css_backgroundcliptext',
            // 'css_backgroundrepeat',
            // 'css_backgroundsizecover',
            // 'css_boxsizing',
            // 'css_cubicbezierrange',
            // 'css_displayrunin',
            // 'css_displaytable',
            // 'css_filters',
            // 'css_hyphens',
            // 'css_mask',
            // 'css_mediaqueries',
            // 'css_overflow_scrolling',
            // 'css_pointerevents',
            // 'css_remunit',
            // 'css_resize',
            // 'css_scrollbars',
            // 'css_shapes',
            // 'css_userselect',
            // 'cssanimations',
            // 'css-backgroundcliptext',
            // 'css-backgroundposition-fourvalues',
            // 'css-backgroundposition-xy',
            // 'css-calc',
            // 'csscolumns',
            // 'cssgradients',
            // 'css-lastchild',
            // 'css-objectfit',
            // 'css-positionsticky',
            // 'cssreflections',
            // 'css-regions',
            // 'css-subpixelfont',
            // 'css-supports',
            // 'csstransforms',
            // 'csstransforms3d',
            // 'csstransitions',
            // 'css-vhunit',
            // 'css-vmaxunit',
            // 'css-vminunit',
            // 'css-vwunit',  
            // 'custom_protocol_handler',
            // 'dataview_api',
            // 'dom_classlist',
            // 'dom_createElement_attrs',
            // 'dom_dataset',
            // 'dom_microdata',
            // 'draganddrop',
            // 'elem_datalist',
            // 'elem_details',
            // 'elem_output',
            // 'elem_progress_meter',
            // 'elem_ruby',
            // 'elem_time',
            // 'elem_track',
            // 'emoji',
            // 'es5_strictmode',
            // 'event_deviceorientation_motion',
            // 'file_api',
            // 'file_filesystem',
            // 'flexbox',
            // 'flexbox-legacy',
            // 'fontface',
            // 'forms_placeholder',
            // 'forms_speechinput',
            // 'forms_validation',
            // 'forms-fileinput',
            // 'forms-formattribute',
            // 'fullscreen_api',
            // 'gamepad',    
            // 'generatedcontent',
            // 'getusermedia',
            // 'hashchange',
            // 'ie8compat',
            // 'iframe-sandbox',
            // 'iframe-seamless',
            // 'iframe-srcdoc',
            // 'img_apng',
            // 'img_webp',
            // 'indexeddb',
            // 'inlinesvg',
            // 'input',
            // 'inputtypes',
            // 'json',
            // 'lists_reversed',
            // 'localstorage',
            // 'mathml',
            // 'mq',
            // 'network_connection',
            // 'network_eventsource',
            // 'network-xhr2',
            // 'notification',
            // 'opacity',
            // 'performance',
            // 'pointerlock-api', 
            // 'prefixed',
            // 'quota_management_api',
            // 'requestanimationframe',
            // 'respond',
            // 'script_async',
            // 'script_defer',
            // 'sessionstorage',
            // 'smil',
            // 'style-scoped',
            // 'svg',
            // 'svgclippaths',
            // 'svg-filters',
            // 'testallprops',
            // 'testbundle',
            // 'touch',
            // 'unicode',
            // 'url_data_uri',
            // 'userdata',
            // 'vibrate',
            // 'vibration',
            // 'web_intents',
            // 'webgl_extensions',
            // 'websockets',
            // 'websockets_binary',
            // 'window_framed',
            // 'workers_blobworkers',
            // 'workers_dataworkers',
            // 'workers_sharedworkers'
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
        	// "dev/custom-tests/ios.js",
        	// "dev/custom-tests/mobile.js"
        ]
    }
    	 	
};