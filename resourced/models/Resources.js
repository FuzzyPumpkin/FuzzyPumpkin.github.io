const mongoose = require("mongoose");
 
const resourceSchema = new mongoose.Schema({
   siteURL: String,
   imageURL: String,
   name: String,
   description: String,
   tags: Array
});
 
module.exports = mongoose.model("Resource", resourceSchema);