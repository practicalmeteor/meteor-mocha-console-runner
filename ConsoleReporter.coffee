{ObjectLogger} = require("meteor/practicalmeteor:loglevel")

log = new ObjectLogger('ConsoleReporter', 'info')


class ConsoleReporter extends  practical.mocha.BaseReporter

  VERSION: "0.2.0-rc.1"

  constructor: (@clientRunner, @serverRunner, @options)->
    try
      log.enter('constructor')
      super(@clientRunner, @options)
      @registerRunnerEvents()
      @serverStats = null
      @clientStats = null
      @clientTests =  []
    finally
      log.return()

  registerRunnerEvents:->
    try
      log.enter("registerRunnerEvents")

      @serverRunner.on "start", => @printReporterHeader("Server")
      @serverRunner.on 'test end', @onServerTestEnd
      @serverRunner.on "end", @onServerRunEnd

      @clientRunner.on 'start', => @printReporterHeader("Client")
      @clientRunner.on 'test end', @onClientTestEnd
      @clientRunner.on "end", @onClientRunEnd

    finally
      log.return()

  printReporterHeader: (where)=>
    try
      log.enter("printReporterHeader", where)
      return if @options.runOrder isnt 'serial'
      console.log("\n--------------------------------------------------")
      console.log("------------------ #{where} tests ------------------")
      console.log("--------------------------------------------------\n")
    finally
      log.return()

  onServerTestEnd: (test)=>
    try
      log.enter("onServerTestEnd", test)
      @printTest(test, "server")
    finally
      log.return()

  onServerRunEnd: (stats)=>
    try
      log.enter("onServerRunEnd", stats)
      @serverStats = stats
      @finishAndPrintTestsSummary()

    finally
      log.return()

  onClientTestEnd: (test)=>
    try
      log.enter("onClientTestEnd", test)
      @printTest(test, 'client')
    finally
      log.return()

  onClientRunEnd: ()=>
    try
      log.enter("onClientRunEnd")
      @clientStats = @clientRunner.stats
      # total property is missing in clientRunner.stats
      @clientStats.total = @clientRunner.total
      @finishAndPrintTestsSummary()

    finally
      log.return()

  printTest: (test, where)->
    try
      log.enter("prinTest", test)

      state = test.state or (if test.pending then "pending")
      if @options.runOrder isnt 'serial'
        # Get first chart 's' or 'c' for client/server
        where = where[0].toUpperCase() + ": "
      else
        # Since the test are running in parallel we don't need
        # to specify where they are client or   server tests.
        where = ""

      console.log("#{where}#{test.fullTitle()} : #{state}")
      if test.state is "failed"
        console.log("  " + (test.err.stack || test.err))
      console.log("")
    finally
      log.return()


  finishAndPrintTestsSummary: ()=>
    try
      log.enter("finishAndPrintTestsSummary")
      return if not @clientStats?.total? or not @serverStats?.total?

      console.log("\n--------------------------------------------------")
      console.log("---------------------RESULTS----------------------")
      console.log("PASSED:", @serverStats.passes + @clientStats.passes)
      console.log("FAILED:", @serverStats.failures + @clientStats.failures)
      console.log("TOTAL:", @serverStats.total + @clientStats.total)
      console.log("--------------------------------------------------")
      console.log("--------------------------------------------------\n")
      window.TEST_STATUS = {FAILURES: @serverStats.failures + @clientStats.failures, DONE: true}
      window.DONE = true
      window.FAILURES = @serverStats.failures + @clientStats.failures
    finally
      log.return()

module.exports.runTests = () ->
  MochaRunner.setReporter(ConsoleReporter)
