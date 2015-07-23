module.exports = function (grunt,data) {

    grunt.registerTask('default', ['newer:csscss','newer:jsbeautifier', 'newer:parker', 'newer:uncss', 'newer:critical', 'newer:inlinecss']);
    
};