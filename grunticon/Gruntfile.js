module.exports = function(grunt) {

    



	var data = {
	    pkg: grunt.file.readJSON('package.json'),
	    paths: {
	        icons: {
                root: 'css/icons',
	            raw: 'css/icons/raw',
                opt: 'css/icons/opt'
	        }	       
	    },
	};

    require('load-grunt-config')(grunt,{data: data});
};
