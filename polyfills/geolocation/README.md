Geolocation
===========

Can I use link [http://caniuse.com/#feat=geolocation](http://caniuse.com/#feat=geolocation)

(so it's just IE8 again)

There is a shim available as part of webshim called [geolocation.js](https://github.com/aFarkas/webshim/blob/master/src/shims/geolocation.js)

## Summary

Adds the use of the following where not supported:

.getCurrentPosition  
.watchPosition  
.clearWatch  

\+ Allows a fairly consistent approach across everything

\- jquery dependency plus others   
\- thought we were in london, assume this is a proxy thing  
\- pretty slow because of this  

### Example

index.html

N.B. Because of security restrictions chrome won't work with file:// protocol.

It just seems a lot of effort for edge cases.

[Google](https://code.google.com/p/geo-location-javascript/) suggest a simple check and fallback to input field which I'd agree on as really it's only IE8 and older desktop browsers that lack support and they'd tend to be at a fixed location where you can find out the postcode.




