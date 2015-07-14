module.exports = {
	tests: {
        options: {
          screenshots: 'tests/screens/baselines',
          results: 'tests/screens/results',
            viewportSize: [1280, 800],
            mismatchTolerance: 0.05
          },
          src: [
             'tests/screens/phantomcss.js'
          ]
      },
};