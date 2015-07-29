#GRUNT-WEBFONT

[git](https://github.com/sapegin/grunt-webfont)

Grunt-webfont is a pretty handle tool for creating icon fonts.  Its very quick, font's are created in all required formats and supports CSS/Sass/LESS/Stylus.

Another bonus is it actively supports BEM (as well as Bootstrap) syntax formatting.  See output css in /tests/output/icons2

Example configs

```
module.exports = {

    icons1: {
        src: 'tests/src/*.svg',
        dest: 'tests/output/icons1',
        options: {
            hashes: false,
            engine: 'node',
            
        }
    },
    icons2: {
        src: 'tests/src/*.svg',
        dest: 'tests/output/icons2',
        destCss: 'tests/output/icons2',
        options: {
            hashes:false,
            syntax: 'bem',
            engine: 'node',
            stylesheet: 'scss',
            templateOptions: {
                baseClass: 'glyph-icon',
                classPrefix: 'glyph-icon--',
                mixinPrefix: 'make-icon-'
            }

        }
    }
```