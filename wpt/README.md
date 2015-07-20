#grunt-wpt

* Runs the WPT tool

------

* Slow to test
* Will auto load the results in a browser using contrib-connect
* Results go into /results directory
* Easier to read and more useful than PhantomAS. It is easy to see what resources are on the page and what is slowing things down.
* Currently using my API key, needs a TH_NK one if we use this.

------

* To test local sites using this you need to use Ngrok.
* This is a service that lets you show localhost online (https://ngrok.com/)
* Change the port in Gruntfile.js to the port the local site is running on and this will replace the URL value with the temporary Ngrok URL. The wpt test is then ran as usual.
* Better explanation here: http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/
* I have set this up so 'grunt wpttest' runs the test against the URL specified and 'grunt localtest' uses Ngrok to test local sites.