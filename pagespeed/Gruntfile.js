module.exports = function (grunt) {

    var data = {
        pkg: grunt.file.readJSON('package.json'),
        url: "www.google.co.uk"
    };

    var ngrok = require('ngrok');

    grunt.registerTask('ngrok-test', 'Run pagespeed with ngrok', function () {

        var done = this.async();
        var port = 8080;
        
        ngrok.connect(port, function (err, url) {
            if (err !== null) {
                grunt.fail.fatal(err);
                return done();
            }
            grunt.config.set('url', url);
            grunt.task.run('speedtest');
            done();
        });
    });

    grunt.registerTask('localtest', ['ngrok-test']);

    require('load-grunt-config')(grunt, {
        data: data
    });

};