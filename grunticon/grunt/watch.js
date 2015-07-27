module.exports = {
	gruntfile:{
		files: ['gruntfile.js'],
	    tasks: [],
	    options: {
	      spawn: false,
	    },
	},
	icons: {
	    files: ["css/icons/source/*.svg", "css/icons/source/*.png"],
        tasks: ["grunticon:myIcons"]
	}

};