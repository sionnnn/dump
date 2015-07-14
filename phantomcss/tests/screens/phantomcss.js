casper.start('http://localhost:8080')
  .then(function() {
    phantomcss.screenshot('body', 'body');
  })
  .then(function() {
  	this.mouse.move('.cta')
    phantomcss.screenshot('.cta', 'hover');
  })
;
