module.exports = {
	options     : {
        // Task-specific options go here. 
    },
    your_target : {
        expand      : true,
        cwd         : '<%= paths.src.root %>/svg',
        src         : ['**/*.svg'],
        dest        : '<%= paths.dest.root %>/assets/svg',
        options     : {
            mode: {
                css: true,
                stack: true,
                symbol: true
            }
        }
    },
};