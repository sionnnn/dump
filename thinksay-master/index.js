'use strict';
var chalk = require('chalk');
var pad = require('pad-component');
var wrap = require('word-wrap');
var stringWidth = require('string-width');
var stripAnsi = require('strip-ansi');
var ansiStyles = require('ansi-styles');
var ansiRegex = require('ansi-regex')();
var repeating = require('repeating');

var topOffset = 3;
var leftOffset = 27;
var defaultGreeting =
  "\n             ,%%%%%%%%%%%%%%%%,           " +
  "\n           ,%%%%/\\%%%%%%%%/\\%%%%      " +
  "\n          ,%%%%%%\\c \"\" J/%%%%%%     " +
  "\n %.       %%%%%%%%/ o  o \\%%%%%%     " +
  "\n `%%.      %%%%%%%%    _  |%%%%%%     " +
  "\n  `%%      `%%%%%%%%(__Y__)%%%%'     " +
  "\n  //       ;%%%%%%%%`\\-/%%%%%%'      " +
  "\n ((       /  `%%%%%%%%%%%%%%'        " +
  "\n  \\\\    .'          |" +
  "\n   \\\\  /       \\  | |" +
  "\n    \\\\/         ) | |" +
  "\n     \\         /_ | |__" +
  "\n     (___________)))))))";

module.exports = function (message, options) {
  message = (message || 'Welcome to Yeoman, ladies and gentlemen!').trim();
  options = options || {};

  /*
   * What you're about to see may confuse you. And rightfully so. Here's an
   * explanation.
   *
   * When thinksay is given a string, we create a duplicate with the ansi styling
   * sucked out. This way, the true length of the string is read by `pad` and
   * `wrap`, so they can correctly do their job without getting tripped up by
   * the "invisible" ansi. Along with the duplicated, non-ansi string, we store
   * the character position of where the ansi was, so that when we go back over
   * each line that will be printed out in the message box, we check the
   * character position to see if it needs any styling, then re-insert it if
   * necessary.
   *
   * Better implementations welcome :)
   */

  var maxLength = 24;
  var frame;
  var styledIndexes = {};
  var completedString = '';
  var regExNewLine;

  if (options.maxLength) {
    maxLength = stripAnsi(message).toLowerCase().split(' ').sort()[0].length;

    if (maxLength < options.maxLength) {
      maxLength = options.maxLength;
    }
  }

  regExNewLine = new RegExp('\\s{' + maxLength + '}');

  frame = {
    top: '.' + repeating('-', maxLength + 2) + '.',
    side: ansiStyles.reset.open + '|' + ansiStyles.reset.open,
    bottom: ansiStyles.reset.open + '\'' + repeating('-', maxLength + 2) + '\''
  };

  message.replace(ansiRegex, function (match, offset) {
    Object.keys(styledIndexes).forEach(function (key) {
      offset -= styledIndexes[key].length;
    });

    styledIndexes[offset] = styledIndexes[offset] ? styledIndexes[offset] + match : match;
  });

  return wrap(stripAnsi(message), { width: maxLength })
    .split(/\n/)
    .reduce(function (greeting, str, index, array) {
      var paddedString;

      if (!regExNewLine.test(str)) {
        str = str.trim();
      }

      completedString += str;

      str = completedString
        .substr(completedString.length - str.length)
        .replace(/./g, function (char, charIndex) {
          if (index > 0) {
            charIndex += completedString.length - str.length + index;
          }

          var hasContinuedStyle = 0;
          var continuedStyle;

          Object.keys(styledIndexes).forEach(function (offset) {
            if (charIndex > offset) {
              hasContinuedStyle++;
              continuedStyle = styledIndexes[offset];
            }

            if (hasContinuedStyle === 1 && charIndex < offset) {
              hasContinuedStyle++;
            }
          });

          if (styledIndexes[charIndex]) {
            return styledIndexes[charIndex] + char;
          } else if (hasContinuedStyle >= 2) {
            return continuedStyle + char;
          } else {
            return char;
          }
        })
        .trim();

      paddedString = pad({
        length: stringWidth(str),
        valueOf: function () {
          return ansiStyles.reset.open + str + ansiStyles.reset.open;
        }
      }, maxLength);

      if (index === 0) {
        greeting[topOffset - 1] += frame.top;
      }

      greeting[index + topOffset] =
        (greeting[index + topOffset] || pad.left('', leftOffset)) +
        frame.side + ' ' + paddedString + ' ' + frame.side;

      if (array.length === index + 1) {
        greeting[index + topOffset + 1] =
          (greeting[index + topOffset + 1] || pad.left('', leftOffset)) +
          frame.bottom;
      }

      return greeting;
    }, defaultGreeting.split(/\n/))
    .join('\n') + '\n';
};
