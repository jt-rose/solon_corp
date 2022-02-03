const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  service: String,
  link: String,
});

const Link = mongoose.model("Link", LinkSchema);

module.exports = Link;
