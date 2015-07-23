module.exports = function (grunt) {

    var data = {
        pkg: grunt.file.readJSON('package.json')
    };
    
    require('time-grunt')(grunt);
    
    grunt.loadNpmTasks('grunt-csscss');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-inline-css');

    require('load-grunt-config')(grunt, {
        data: data
    });

};