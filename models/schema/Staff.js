const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  corporate_id: String,
  first_name: String,
  last_name: String,
  email: String,
  department: String,
  title: String,
});

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = Staff;
