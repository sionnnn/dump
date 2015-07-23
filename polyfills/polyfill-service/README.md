#Polyfill service

Site: https://cdn.polyfill.io/v1/docs/  
GitHub Project: https://github.com/Financial-Times/polyfill-service  

First suggested by Michael and mentioned [in the talk](https://youtu.be/vq-cBmNsMQM?list=PLZriQCloF6GDjyRxP60LBR73Ldd7soGOz&t=1912) from the FT developer at CSSConf Australia.

Sponsored by FT and Yahoo. Ultimate goal is to have a one stop place which autoloads polyfills based on browser short comings.

Rather than allow each module to load the polyfill when required (modernizr yepnope system) this sees the gaps and fills it. A list of [current supported features](https://cdn.polyfill.io/v1/docs/features/) is available on the site.

\+ it's pretty quick
\+ for available features you can write JS without the need to worry about support (classList, DOMContentLoaded, addEventListener for examples).  

\- loads whether you need it or not, though the [API](https://cdn.polyfill.io/v1/docs/api) allows you to target certain polyfills only.  
\- good but doesn't include everything yet.  

Example [index.html](index.html) writes out a console log if support for classList available, try it in IE8.
