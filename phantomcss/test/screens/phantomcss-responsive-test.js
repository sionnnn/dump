phantom.casperTest = true;

phantomcss.init({
    screenshotRoot: './baselines',
    comparisonResultRoot: './results',
    failedComparisonsRoot: './failures',
    cleanupComparisonImages: true, //Remove results directory tree after run
    addLabelToFailedImage: false,
    mismatchTolerance: 0.05,
    // waitTimeout: 60000,
    prefixCount: false, //Prefix the screenshot number to the filename, instead of suffixing it
    // hideElements: <css selector> //hide these items (useful for animations etc to prevent false positives)
    //rebase: casper.cli.get("rebase"), //use this run as a new baseline

    // options for resemblejs
    outputSettings: {
      errorColor: {
        red: 233,
        green: 229,
        blue: 23
      },
      errorType: 'movement',
      transparency: 0.3, //Fade unchanged areas to make changed areas more apparent.
      largeImageThreshold: 1200 //By default, the comparison algorithm skips pixels when the image width or height is larger than 1200 pixels. Set it to 0 to switch it off completely.
    }


});


viewportSizes = [
    [320,480],
    [420,568],
    [640,960],
    [1024,768],
    [1280,800],
    [1600,900],
    [1920,1280]
];
var url = 'https://www.warnerbros.co.uk/movies/american-sniper';

casper.start();

phantomcss.turnOffAnimations(); //Turn off CSS transitions and jQuery animations
phantomcss.compareSession(); //Compare image diffs generated in this test run only

casper.each(viewportSizes, function(self, viewportSize, i){
    var width = viewportSize[0];
    var height = viewportSize[1];
    var screenshotName = 'article-' + width + '-' + height;

    casper.wait(2000, function() {
        casper.viewport(width, height);
        casper.thenOpen(url, function() {
            console.log('loading ' + width + '-' + height);
            casper.wait(5000, function() {

                console.log('screenshotting ...');
                phantomcss.screenshot('body',screenshotName);
            });
        });
    });
});