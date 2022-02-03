const mongoose = require("mongoose");

const PastWorkSchema = new mongoose.Schema({
  app: String,
  year: Number,
  description: String,
  revenue: String,
});

const PastWork = mongoose.model("PastWork", PastWorkSchema);

module.exports = PastWork;
