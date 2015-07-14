module.exports = {
	tests: {
        options: {
          screenshots: 'test/screens/baselines',
          results: 'test/screens/results',
            viewportSize: [1280, 800],
            mismatchTolerance: 0.05
          },
          src: [
             'test/screens/phantomcss.js'
          ]
      },
};