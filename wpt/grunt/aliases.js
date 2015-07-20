module.exports = function (grunt,data) {

    grunt.registerTask('wpttest', ['wpt', 'connect:wpt']);

};