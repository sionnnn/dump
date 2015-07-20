module.exports = function (grunt) {

    var data = {
        pkg: grunt.file.readJSON('package.json'),
        test_url: 'www.google.co.uk',
        wpt_key: 'A.4c8583e4c074742a35219be81d6cf2b7'
    };

    grunt.loadNpmTasks('grunt-wpt');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    var ngrok = require('ngrok');

    grunt.registerTask('ngrok-test', 'Run pagespeed with ngrok', function () {

        var done = this.async();
        var port = 8080;
        
        ngrok.connect(port, function (err, url) {
            if (err !== null) {
                grunt.fail.fatal(err);
                return done();
            }
            grunt.config.set('test_url', url);
            grunt.task.run('wpttest');
            done();
        });
    });
    
    grunt.registerTask('localtest', ['ngrok-test']);
    
    require('load-grunt-config')(grunt, {
        data: data
    });

};