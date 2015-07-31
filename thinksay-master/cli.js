#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var thinksay = require('./');

require('taketalk')({
  init: function (input, options) {
    console.log(thinksay(input, options));
  },
  help: function () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    thinksay <string>',
      '    thinksay <string> --maxLength 8',
      '    echo <string> | thinksay',
      '',
      '  Example',
      '    thinksay "Sindre is a horse"',
      thinksay('Sindre is a horse')
    ].join('\n'));
  },
  version: pkg.version
});
