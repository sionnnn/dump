module.exports = function(grunt)
{
	var data =
	{
		pkg				:grunt.file.readJSON('package.json'),
		paths			:grunt.file.readJSON('framework.paths.json'),
		config			:grunt.file.readJSON('framework.config.json')
	};

	require('load-grunt-config')(grunt,{data: data});

	grunt.registerTask('styles', ['sass']);

	grunt.registerTask('default', ['styles', 'watch']);
};
