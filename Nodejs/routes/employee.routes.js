const express = require("express");
const router = express.Router();
const {
  addEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee.controllers");

router.post("/", addEmployee); 
router.get("/", getEmployees); 
router.put("/:id", updateEmployee); 
router.delete("/:id", deleteEmployee);

module.exports = router;