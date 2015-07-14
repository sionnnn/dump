#phantomcss
>css regression testing

```shell
>npm install
>grunt
```

* used to generate screenshots of pages/sections and compare with baseline images

------

* currently set to test ./index.html
* js test written in casper and located ./test/screens/phantomcss.js
* output images in ./test/screens/baselines and ./test/screens/results

------

* would be useful to add to styleguide sections
* should be added to git commit hook? or run on build