const express = require('express');
const constant = require('./utils/Constant.js');
// create express app
const app = express();
const port = process.env.PORT || constant.PORT;
const EmpRoutes = require('./routes/emp_routes.js');
const connection = require('./database/connection.js');
const logger = require('./logger/logger.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req,res,next) =>{
  logger.info(`Incoming API URL ::: ${req.originalUrl}`);
  logger.info(`Incoming Request type ::: ${req.method}`);
  next();
})
app.use('/api',EmpRoutes);
// Server will listen on mentioned port
app.listen(port, () => {
  logger.info(`Server is listening on : ${port}`);
});

module.exports =app;