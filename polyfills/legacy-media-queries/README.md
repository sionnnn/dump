CSS Media Query Support for old browsers
==================================

Look at polyfills/solutions to deal with lack of media query support in browsers such as IE8 and below.

Some options available:
------------
*  legacssy
*  stripmq
*  respond.js
------------

## legacssy

npm: [here](https://www.npmjs.com/package/grunt-legacssy)  
github: [here](https://github.com/robinpokorny/grunt-legacssy)  
examples: [here](legacssy/)

\+ Grunt plugin available  
\- limited config


## stripmq

npm: [here](https://www.npmjs.com/package/grunt-stripmq)  
github: [here](https://github.com/jtangelder/grunt-stripmq)  
examples: [here](stripmq/)

\+ Grunt plugin available  
\+ quite a few configurable options  


## respond.js

github: [here](https://github.com/scottjehl/Respond)  

\+ quick to implement  
\- 3rd party dependency  
\- Speed?  

I've tested both grunt plugins and there is a light weight demo for each. Additionally I've ran this over the Anglian Home CSS and then used Charles Proxy to see the difference. Apart from the obvious CSS3 not supported by IE8 the output is pretty good.

This is down to how configurable you want it really.







