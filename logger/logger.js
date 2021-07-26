const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const constant = require('../utils/Constant.js');

const transport = new DailyRotateFile({
  filename: constant.FILEPATH,
  datePattern: constant.DATE,
  zippedArchive: true,
  maxSize: constant.MAXSIZE,
  maxFiles: constant.MAXDAYS,
  level: constant.LOGGER_LEVEL_DEBUG,
});
const errorTransport = new DailyRotateFile({
  filename: constant.ERROR_FILEPATH,
  datePattern: constant.DATE,
  zippedArchive: true,
  maxSize: constant.MAXSIZE,
  maxFiles: constant.MAXDAYS,
  level: constant.LOGGER_LEVEL_ERROR,
});

module.exports = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD T HH:mm:ss' }),
    format.printf(info => `${[info.timestamp]}:${info.level}:${info.message}`),
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD T HH:mm:ss' }),
        format.printf(info => `${[info.timestamp]}:${info.level}:${info.message}`),
      )
    }),
    transport,
    errorTransport
  ]
});