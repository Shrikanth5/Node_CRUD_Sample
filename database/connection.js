const dbConfig = require('./config.js');
const mongoose = require('mongoose');
const logger = require('../logger/logger.js');

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
// Connecting to the database
const connection = mongoose.connect(dbConfig.url, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  logger.info(`Successfully connected to the database`);
}).catch(err => {
  logger.info(`Could not connect to the database ::: ${err}`);
});

module.exports = connection;

