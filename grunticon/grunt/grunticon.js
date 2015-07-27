module.exports = {
    myIcons: {
        files: [{
            expand: true,
            cwd: 'css/icons/source',
            src: ['*.svg', '*.png'],
            dest: "css/icons"
        }],
        options: {
            enhanceSVG: true
        }
    }
}
