var Employee = require('../model/emp_model.js');
const logger = require('../logger/logger.js')

const getEmployee =async function () {
  try{
  var employeeList =await Employee.find({"is_deleted":false});
  return employeeList;
  }catch(error){
    throw error
  }
}
const addEmployee = async function (req) {
  try{
    const newEmployee = new Employee({
      first_name: req.firstname,
      last_name:req.lastname,
      user_name:req.username,
      emp_id: req.empId,
      phone_number:req.phonenumber,
      address:req.address,
      gender:req.gender,
    })
    var createEmployee = await newEmployee.save();
    return createEmployee;
  }catch(error){
    throw error
  }
}
const updateEmployee = async function (req) {
  try{
  var EditEmployee = await Employee.findByIdAndUpdate(req._id, req, { new: true ,useFindAndModify:false})
  return EditEmployee;
  }catch(error){
    throw error
  }
}
const deleteEmployee = async function (req) {
  try{
    var deleteEmployee = await Employee.findByIdAndUpdate(req,{"is_deleted":true},{ new: true ,useFindAndModify:false})
    return deleteEmployee;
  }catch(error){
    throw error
  }
}
module.exports ={getEmployee,addEmployee,updateEmployee,deleteEmployee}