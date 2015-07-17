module.exports = function(grunt) {

    var data = {
        pkg: grunt.file.readJSON('package.json'),
		paths: {
			src:{
				root:'src',
			},
			dest:{
				root:'public',
			},
			doc:{
				root:'docs',
			}
		},
        title: 'test'
    };

    require('load-grunt-config')(grunt,{data: data});

    
    
    grunt.registerTask('svg', ['svg_sprite']);
};
