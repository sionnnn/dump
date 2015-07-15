# Styles

Changed the config/settings into a .json file so it can be shared easily between build tools. I've done this because I strongly believe that gulp is the better of the 2 tools, so if we place the settings in an external config file it will make this easier to switch if we ever change our mind. My plan is, is to mirror the grunt build tools in gulp, to show that it is faster.

The reason why the .json files I've added have a lot of additional unused info is - I'm porting my gulp scripts into grunt, and I've got quite a lot of config in there.

## Changes
I've added a few additional bits to the sass.js file

* outputStyle
* Include paths - this will be particularly useful when we start pulling/referencing files in the bower_packages
* updated how the files in the src directory are referenced as we may need to build more that 1 .css file - also, the names aren't hardcoded.