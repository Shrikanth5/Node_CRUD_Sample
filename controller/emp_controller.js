var EmployeeService = require('../service/emp_service.js');
const constant = require('../utils/Constant.js');
const logger = require('../logger/logger.js');
/**
 *get all employee details from collections
 *@param {Object} empty
 */
const getEmployeeList = async function (req, res) {
  logger.info(`Get employee details`);
  try {
    var employeeData = await EmployeeService.getEmployee({});
    return res.send({ status: constant.SUCCESSCODE[200], data: employeeData });
  } catch (error) {
    logger.error(`Error while getting data ::: ${error.message}`);
    return res.send({ status: constant.ERRORCODE[500], message: error.message });
  }
}
/**
 *create a new employee data by passing values of firstname,lastname,address,username,empid,phonenumber
 *@param {Object} req.body
 */
const addEmployee = async function (req, res) {
  try {
  if (!req.body.empId) {
    return res.send({ status: constant.ERRORCODE[400], message: constant.EMPLOYEE_CREATE_VALIDATE });
  }
    logger.info(` Add Employee details of firstname,lastname,username,gender,address,phonenumber`);
    var addedEmployee = await EmployeeService.addEmployee(req.body);
    return res.send({ status: constant.SUCCESSCODE[200], message: constant.EMPLOYEE_CREATE_SUCESS, data: addedEmployee });
  } catch (error) {
    logger.error(`Error while adding data ::: ${error.message}`);
    return res.send({ status: constant.ERRORCODE[500], message: error.message });
  }
}
/**
 *update a existing employee details like address,phonenumber
 *@param {Object} req.body
 */
const updateEmployee = async function (req, res) {
  try {
    logger.info(`Update the employee details`);
    var updatedEmployee = await EmployeeService.updateEmployee(req.body);
    return res.send({ status: constant.SUCCESSCODE[200], message: constant.EMPLOYEE_UPDATE_SUCESS, data: updatedEmployee });
  } catch (error) {
    logger.error(`Error while Updating data ::: ${error.message}`);
    return res.send({ status: constant.ERRORCODE[500], message: error.message });
  }
}
/**
 *Remove or delete the existing employee using soft delete.
 *@param {Object} req.params.id
 */
const deleteEmployee = async function (req, res) {
  try {
    logger.info(`Delete the particular employee`);
    var deletedEmployee = await EmployeeService.deleteEmployee(req.params.id);
    return res.send({ status: constant.SUCCESSCODE[200], message: constant.EMPLOYEE_DELETE_SUCESS, data: deletedEmployee });
  } catch (error) {
    logger.info(`Error while delete the employee data :::${error.message}`);
    return res.send({ status: constant.ERRORCODE[500], message: error.message });
  }
}
module.exports = { getEmployeeList, addEmployee, updateEmployee, deleteEmployee }
