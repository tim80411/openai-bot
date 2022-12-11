const pino = require('pino');

// @ts-ignore
const logger = pino({
  level: 'trace',
  timeStamp: pino.stdTimeFunctions.isoTime,
  nestedKey: null,
  base: null,
});

module.exports = logger;
