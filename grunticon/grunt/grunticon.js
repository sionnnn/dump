module.exports = {
    myIcons: {
        files: [{
            expand: true,
            cwd: '<%= paths.icons.root %>',
            src: ['opt/*.svg', 'raw/*.png'],
            dest: '<%= paths.icons.root %>'
        }],
        options: {
            enhanceSVG: true,
            compressPNG: true
        }
    }
}



//potential mixin application if using sass - may be abit overkill and i've not tested it

/*
 * 
 
 module.exports = {
    myIcons: {
        files: [{
            expand: true,
            cwd: 'sass/icons/source',
            src: ['*.svg', '*.png'],
            dest: 'sass/icons'
        }],
        options: {
            datasvgcss: 'icons.data.svg.scss', //default 'icons.data.svg.css'
            cssprefix: '@mixin icon-' //default 'icon-'
        }
    }
}

 * 
 */