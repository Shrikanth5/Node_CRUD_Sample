var mongoose = require('mongoose');
const logger = require('../logger/logger');

const employeeSchema = new mongoose.Schema({
  first_name: String,
  last_name:String,
  user_name:{type:String,unique:true,required:true},
  emp_id: Number,
  phone_number:Number,
  address:String,
  gender:String,
  is_deleted:{type:Boolean,default:false}
})
const Employee = mongoose.model('employees', employeeSchema);
module.exports = Employee;