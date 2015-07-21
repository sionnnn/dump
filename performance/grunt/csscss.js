module.exports = {

    dist: {
        //src: ['assets/css/application.css'],
        //ignoreProperties: 'padding',
        //ignoreSelectors: '.test-a',
        options: {
            outputJson: true
        },
        files: {
            'results/output.json': ['assets/css/application.css']
        }
    }

}
