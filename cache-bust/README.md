#grunt-cache-bust

[www.npmjs.com/package/grunt-cache-bust](https://www.npmjs.com/package/grunt-cache-bust)


##Example config

```
module.exports = {
    options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 16,
        baseDir: '',
        rename: false,
        ignorePatterns: ["nochange"]
    },
    assets: {
        files: [{
            src: ['*.html']
        }]
    }
};
```
