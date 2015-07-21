module.exports = function (grunt) {

    var data = {
        pkg: grunt.file.readJSON('package.json')
    };

   grunt.loadNpmTasks('grunt-contrib-compress');

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        data: data
    });

};