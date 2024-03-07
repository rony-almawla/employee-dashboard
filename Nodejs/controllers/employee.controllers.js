const Employee = require('../models./employee.model');

const addEmployee = async (req, res) => {
    const { name, email, gender } = req.body;
    try {
      const employee = await Employee.create({
        name,
        email,
        gender,
      });
      res.status(200).send({ employee });
    } catch (error) {
      res.status(500).send({ error });
    }
  };
  
  const getEmployees = async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).send({ employees });
    } catch (error) {
      res.status(500).send({ error });
    }
  };
  
  const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, email, gender } = req.body;
    try {
      const employee = await Employee.findByIdAndUpdate(
        id,
        { name, email, gender },
        { new: true }
      );
      res.status(200).send({ employee });
    } catch (error) {
      res.status(500).send({ error });
    }
  };
  
  const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
      await Employee.findByIdAndDelete(id);
      res.status(200).send({ message: 'Employee deleted successfully' });
    } catch (error) {
      res.status(500).send({ error });
    }
  };