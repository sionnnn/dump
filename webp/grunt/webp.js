module.exports = {
      files: {
        expand: true,
        cwd: 'tests/images/',
        src: '**.{png,jpg,gif}',
        dest: 'tests/images/webp'
      },
      options: {
        binpath: require('webp-bin').path,
        preset: 'photo',
        verbose: true,
        quality: 100,
        alphaQuality: 100,
        compressionMethod: 6,
        segments: 4,
        psnr: 42,
        sns: 50,
        filterStrength: 40,
        filterSharpness: 3,
        simpleFilter: true,
        partitionLimit: 50,
        analysisPass: 6,
        multiThreading: true,
        lowMemory: false,
        alphaMethod: 0,
        alphaFilter: 'best',
        alphaCleanup: true,
        noAlpha: false,
        lossless: false,
      }
};