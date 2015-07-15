

module.exports = function(grunt)
{
	var data =
	{
		pkg				:grunt.file.readJSON('package.json'),
		paths			:grunt.file.readJSON('framework.paths.json'),
		config			:grunt.file.readJSON('framework.config.json'),
		loadGruntTasks	:
		{
			pattern	:['grunt-*','!grunt-jscs'],
			config	:require('./package.json'),
			scope	:'devDependencies'
		}
	};

	require('load-grunt-config')(grunt,{data: data});
	
	// other style things to add
	// * sourcemaps	
	// * csscomb
	// * combine media queries
	// * header/banner
	// * css minification
	
	grunt.registerTask('styles', ['sass', 'postcss']);

	grunt.registerTask('default', ['styles']);
};
