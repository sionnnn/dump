#pagespeedtest

* Runs the Google PageSpeed Insights tool in Grunt

------

* Currently set up to use a global grunt value 'URL', I have set this to google.co.uk. Just change this in Gruntfile.js to test another site.
* threshold paramter can set a warning if the test score is too low
* Is useful and worth having to do a quick test but you get more detail doing this online rather than grunt.

------

* To test local sites using this you need to use Ngrok.
* This is a service that lets you show localhost online (https://ngrok.com/)
* Change the port in Gruntfile.js to the port the local site is running on and this will replace the URL value with the temporary Ngrok URL. The pagespeed test is then ran as usual.
* Better explanation here: http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/
* I have set this up so 'grunt speedtest' runs the test against the URL specified and 'grunt localtest' uses Ngrok to test local sites.