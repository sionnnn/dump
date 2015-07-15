module.exports = {
	dynamic: {                         // Another target
      options: {                       // Target options
        optimizationLevel: 1
      },
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'tests/images/',                   // Src matches are relative to this path
        src: ['**.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'tests/images/min/',                  // Destination path prefix
      }]
    }
};