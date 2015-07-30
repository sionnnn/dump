module.exports = {
	styles:{
		files: ['<%= paths.assets.styles.dir %>/**/*.scss', '**/modules/**/*.scss'],
	    tasks: ['styles'],
	    options: {
	      spawn: false,
	    },
	}
};
