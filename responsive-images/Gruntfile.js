module.exports = function(grunt) {

	var data = {
		pkg: grunt.file.readJSON('package.json')
	};
	
	grunt.initConfig({
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            width: 320,
            height: 240
          },{
            name: 'large',
            width: 640
          },{
            name: "large",
            width: 1024,
            suffix: "_x2",
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['**.{jpg,gif,png}'],
          dest: 'tests/images/responsive',
          cwd: 'tests/images/',
        }]
      }
    },
  })

  grunt.loadNpmTasks('grunt-responsive-images');

};
