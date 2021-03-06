#SVG animations

## Basic resources
* [Codrops articles on SVG animation](http://tympanus.net/codrops/?s=svg&search-type=posts)
* [Some benchmarking data](https://css-tricks.com/weighing-svg-animation-techniques-benchmarks/)

## SMIL / native animation
Support is good except for IE (where it is non-existent and not planned).
* [Quick demo](http://sandbox.adam.local/svg/smil.html)
* [CanIUse support matrix](http://caniuse.com/#feat=svg-smil)
* [CSS Tricks: Guide to SMIL](https://css-tricks.com/guide-svg-animations-smil/)

## CSS animation
Mainly used for simple icon animations or in conjunction with js for more complex stuff
* [CoDrops: Animated checkboxes](http://tympanus.net/Development/AnimatedCheckboxes/)

## JS animation
There's a few libraries to support js animations, including:

### Velocity (34kb minified)
A general lightweight animation library which also supports SVG
* [Docs](http://julian.com/research/velocity/)
* [The Simple Intro to SVG Animation](http://davidwalsh.name/svg-animation)

### Raphael (91kb minified)
* [Docs](http://raphaeljs.com/)

### Snap (76kb minified)
A dedicated SVG library
* [Demos](http://sandbox.adam.local/svg/snap.html)
* [Docs](http://snapsvg.io/)
* [SVG Animations Using CSS and Snap.svg](http://davidwalsh.name/svg-animations-snap)
* [CoDrops: Animated SVG Icons with Snap.svg](http://tympanus.net/codrops/2013/11/05/animated-svg-icons-with-snap-svg/)

### GSAP (jquery plugin, 66kb minified for core (gsap + tweenlite + cssplugin))
An animation library which also supoprts SVG. The core library has a number of plugins which you can add for additional functionality. The core library requires the Tweenlite and CSSPlugin plugins as a minimum.
Check the licensing - if the website will charge users for access then it needs a business license.
* [Docs](http://greensock.com/svg-tips)