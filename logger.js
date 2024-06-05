const chalk = require("chalk")

const logSuccess = (msg) => log(msg, chalk.green)

const logError = (msg) => log(msg, chalk.red)

const logInfo = (msg) => log(msg, chalk.cyan)

const logTitle = (msg) => log(msg, chalk.yellow)

const log = (msg, formatter) =>  console.log(formatter(msg))

module.exports = {
    logSuccess: logSuccess,
    logError: logError,
    logInfo: logInfo,
    logTitle: logTitle
}