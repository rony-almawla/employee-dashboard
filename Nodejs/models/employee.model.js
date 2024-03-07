const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
    Name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    Email: {
      type: String,
      required: true,
      maxlength: 1000,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
      }
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
