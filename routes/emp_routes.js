const express = require('express');
const router = express.Router()
var EmployeeController = require('../controller/emp_controller')

router.get('/employee', EmployeeController.getEmployeeList)
router.post('/addemployee', EmployeeController.addEmployee)
router.post('/updateemployee', EmployeeController.updateEmployee)
router.post('/deleteemployee/:id', EmployeeController.deleteEmployee)

module.exports = router;