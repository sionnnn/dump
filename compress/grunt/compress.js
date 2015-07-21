module.exports = {

    
    zip: {
        options: {
            mode: 'zip',
            archive: './tests/zip/site.zip'
        },
        files: [
            {
                expand: true,
                src: ['*.html','assets/**/*.css']
            }
        ],
    },
    
    gzip: {
        options: {
            mode: 'gzip'
        },
        files: [
            {
                expand: true,
                src: ['*.html','assets/**/*.css'],
                dest: './tests/gzip'
            }
        ],
    }

};