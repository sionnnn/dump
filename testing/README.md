# Testing

```shell
npm install
```

```shell
grunt
```

* Using Jasmine as the test tool
* Using Karma to automate and run the tests

Karma is a JavaScript test runner created by the AngularJS team. From the documentation:

Karma is essentially a tool which spawns a web server that executes source code against test code for each of the browsers connected. The results for each test against each browser are examined and displayed via the command line to the developer such that they can see which browsers and tests passed or failed.

Karma also watches all the files, specified within the configuration file, and whenever any file changes, it triggers the test run by sending a signal the testing server to inform all of the captured browsers to run the test code again. Each browser then loads the source files inside an IFrame, executes the tests and reports the results back to the server.