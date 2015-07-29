# Backstopjs
Layout/css regression tool

[Github repo](https://github.com/garris/BackstopJS)
Seems to need a local install of backstopjs (rather than doing a global) as all the image generation is done from inside the mode_modules/backstopjs folder as are the command line commands.
Having said that it does work quickly and generates a very nice report.

Uses gulp, but there is a grunt port:
* [Gulp write-up](http://css-tricks.com/automating-css-regression-testing/)
* [Grunt write-up](https://joe-watkins.io/css-visual-regression-testing-with-grunt-backstopjs/)
* [Grunt port](https://github.com/ddluc/grunt-backstop)

Set up viewports in the config file, along with scenarios (each test is a selector)
Then run gulp reference to generate initial reference images; followed by gulp test to run the tests.

## Cons
At first look it doesn't offer any way of actioning ctas, hover states etc

## Pros
Very good for a high level regression test

```json
{
  "viewports": [
    {
      "name": "phone",
      "width": 320,
      "height": 480
    },
    {
      "name": "tablet_v",
      "width": 568,
      "height": 1024
    },
    {
      "name": "tablet_h",
      "width": 1024,
      "height": 768
    }
  ],
  "scenarios": [
    {
      "label": "http://sandbox.adam.local/johnwick/john%20wick.html",
      "url": "http://sandbox.adam.local/johnwick/john%20wick.html",
      "hideSelectors": [],
      "removeSelectors": [],
      "selectors": [
        ".share",
        ".ribbon header",
        ".fulfilment",
        ".title-meta",
        ".synopsis",
        ".copy-hero",
        "body"
      ],
      "readyEvent": null,
      "delay": 500,
      "misMatchThreshold" : 0.1
    }
  ]
}
```
