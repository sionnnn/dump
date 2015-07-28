module.exports = {
	
	icons: {
	    files: ["<%= paths.icons.raw %>/*.svg", "<%= paths.icons.raw %>/*.png"],
        tasks: ["svgmin:icons","grunticon:myIcons"]
	}

};