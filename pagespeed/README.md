#grunt-pagespeed

* Runs the Google PageSpeed Insights tool in Grunt

------

* Advantage:
* threshold parameter can set a warning if the test score is too low

* Disadvantage:
* No visual output, only will output to the console.
* Cant test local

* Is useful and worth having to do a quick test but you get more detail doing this online rather than through grunt.

------

* To test local sites using this you need to use Ngrok.
* This is a service that lets you show localhost online (https://ngrok.com/)
* Change the port in Gruntfile.js to the port the local site is running on and this will replace the URL value with the temporary Ngrok URL. The pagespeed test is then ran as usual.
* Better explanation here: http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/
* I have set this up so 'grunt speedtest' runs the test against the URL specified and 'grunt localtest' uses Ngrok to test local sites.