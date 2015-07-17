module.exports = {
	svgmin: {
    options: {
        plugins: [
            {
                removeViewBox: false
            }, {
                removeUselessStrokeAndFill: false
            }
        ]
    },
    dist: {
        files: {
            '<%= paths.src.root %>/svg': '<%= paths.dest.root %>/assets/svg/unicorn.svg'
        }
    }
    }
    
};