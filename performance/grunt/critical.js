module.exports = {

    //Seperate File
    test: {

        
        options: {
            base: './',
            css: [
                'assets/css/application.css'
            ],
            width: 1080,
            height: 500
        },
        src: 'index.html',
        dest: 'assets/css/critical.css'
        
    },
    
    /* Inline:
    
    site: {
        options: {
            base: './',
            css: [
                  'assets/css/application.css'
            ],
            width: 1920,
            height: 1080
        },
        src: 'index.html',
        dest: 'index.html'
    }
    
    */

}
