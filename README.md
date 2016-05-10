## practicalmeteor:mocha-console-runner

A meteor package that runs your mocha package tests and prints the server side and client side test results to the client-side console. To be used with [spacejam](https://www.npmjs.com/package/spacejam), for running your mocha package tests from the command line or in continuous integration environments. 

## Usage

### With [spacejam](https://www.npmjs.com/package/spacejam)

```bash
# For apps
spacejam test --driver-package=practicalmeteor:mocha-console-runner
# For packages
spacejam test-packages --driver-package=practicalmeteor:mocha-console-runner <package(s)>

```

Client side tests will be executed in phantomjs.

### With meteor

```bash
# For apps
meteor test --driver-package=practicalmeteor:mocha-console-runner
# For packages
meteor test-packages --driver-package=practicalmeteor:mocha-console-runner <package(s)>
```

Open any browser to run your client side tests in that browser. Will  print the results of both server side and client side tests to the browser console.

If you'd like an HTML reporter, just use [practicalmeteor:mocha](https://atmospherejs.com/practicalmeteor/mocha) directly.

For more information check spacejam documentation [HERE](https://github.com/practicalmeteor/spacejam)
## License

practicalmeteor:mocha-console-runner - [MIT](https://github.com/practicalmeteor/meteor-mocha-console-runner/blob/master/LICENSE.md)

[mocha](https://github.com/mochajs/mocha) - [MIT](https://github.com/mochajs/mocha/blob/master/LICENSE)
