#grunt-zetzer
>static site generator

```shell
>npm install
>grunt
```

* static site generater for mocking up pages before server side integration

------

* templates, partials and the pages are located in the src folder
* pages then created in the docs folder under prototype

------

* Basic commands:
* {{ }}	for evaluation
* {{= }}	for interpolation
* {{! }}	for interpolation with encoding
* {{# }}	for compile-time evaluation/includes and partials
* {{## #}}	for compile-time defines
* {{? }}	for conditionals
* {{~ }}	for array iteration