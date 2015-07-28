

module.exports = function(grunt)
{
	var data =
	{
		pkg				:grunt.file.readJSON('package.json'),		
		loadGruntTasks	:
		{
			pattern	:['grunt-*','!grunt-jscs'],
			config	:require('./package.json'),
			scope	:'devDependencies'
		}
	};

	require('load-grunt-config')(grunt,{data: data});

	grunt.registerTask('default', ['browserSync', 'watch']); 
};
