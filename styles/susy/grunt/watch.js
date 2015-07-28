module.exports = {
	styles:{
		files: ['<%= paths.assets.styles.dir %>/**/*.scss', 'bower_components/**/*.scss'],
	    tasks: ['styles'],
	    options: {
	      spawn: false,
	    },
	}
};
