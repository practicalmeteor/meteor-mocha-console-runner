## practicalmeteor:mocha-console-reporter

A meteor package that runs your mocha package tests and prints the server side and client side test results to the client-side console. To be used with [spacejam](https://www.npmjs.com/package/spacejam), for running your mocha package tests from the command line or in continuous integration environments. 

## Usage

### With [spacejam](https://www.npmjs.com/package/spacejam)

`spacejam test-packages <package-name(s)> --driver-package=practicalmeteor:mocha-console-reporter`

Client side tests will be executed in phantomjs.

### With meteor

`meteor test-packages <package-name(s)> --driver-package=practicalmeteor:mocha-console-reporter`

Open any browser to run your client side tests in that browser. Will  print the results of both server side and client side tests to the browser console.

If you'd like an HTML reporter, just use [practicalmeteor:mocha](https://atmospherejs.com/practicalmeteor/mocha) directly.

## License

practicalmeteor:mocha-console-reporter - [MIT](https://github.com/practicalmeteor/meteor-mocha-console-reporter/blob/master/LICENSE.md)

[mocha](https://github.com/mochajs/mocha) - [MIT](https://github.com/mochajs/mocha/blob/master/LICENSE)
