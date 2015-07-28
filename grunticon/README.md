#GRUNT-GRUNTICON

[www.npmjs.com/package/grunt-grunticon](https://www.npmjs.com/package/grunt-grunticon)

from npm page:  "grunticon is a Grunt.js task that makes it easy to manage icons and background images for all devices, preferring HD (retina) SVG icons but also provides fallback support for standard definition browsers, and old browsers alike. From a CSS perspective, it's easy to use, as it generates a class referencing each icon, and doesn't use CSS sprites."

##Browsers that render the SVG data url stylesheet:

* IE9
* Chrome 14+ (maybe older too?)
* Safari 4+ (maybe older too?)
* Firefox 3.6+ (maybe older too?)
* Opera 15+
* iOS 3+ Safari and Chrome
* Android 4.0 Chrome (caveat: SVG icons do not scale in vector, but do appear to draw in high-resolution)
* Android 4.0 ICS Browser
* BlackBerry Playbook

##Browsers that receive the PNG data url stylesheet:

* IE8
* All versions of Opera, Opera Mini, and Opera Mobile before Chrome integration (v 15)
* Android 2.3 Browser
* Android 2.2 Browser
* Android 2.1 Browser
* Android 1.6 Browser
* Android 1.5 Browser

##Browsers that receive the fallback png request:

* IE7
* IE6
* Non-JavaScript environments


###Pros:

* Handles more than we likely need
* You have the option to render svgs as in embeded elements rather than background images.  Giving more flexibility in colouring / transforming etc.
* Source images can be both SVG and PNG.
* Nice use of base64 encoding rather than a sprite sheet.
* Tasks can be split into seperate sections... myIcons is defined in the included example.


###Cons:

* There is a small javascript snippet placed in the head of the document which decides which style sheet to display.

####Notes:
* svgmin should be used as a precursor to grunticon.
* Need to do a comparison between this and svg_sprite