module.exports = function(grunt) {
 
  var gulp = require('gulp'),
      styleguide = require('sc5-styleguide');
 
  grunt.initConfig({
 
    pkg: grunt.file.readJSON('package.json'),
 
    sass: {
      dist: {
        files: {
          'main.css': 'main.scss'
        }
      }
    },
 
    gulp: {
      'styleguide-generate': function() {
        var outputPath = 'output';
        return gulp.src(['main.scss'])
          .pipe(styleguide.generate({
              title: 'My Styleguide',
              server: true,
              rootPath: outputPath
            }))
          .pipe(gulp.dest(outputPath));
      },
      'styleguide-applystyles': function() {
        gulp.src('main.scss')
          .pipe(styleguide.applyStyles())
          .pipe(gulp.dest('output'));
      }
    },
 
    watch: {
      scss: {
        files: '**/*.scss',
        tasks: ['sass', 'gulp:styleguide-generate', 'gulp:styleguide-applystyles']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-gulp');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.registerTask('default', ['gulp:styleguide-generate', 'gulp:styleguide-applystyles', 'watch']);
 
};