const mongoose = require("mongoose");
const sectionSchema = new mongoose.Schema({
  sectionName: { 
    type: String, 
    required: true 
  },
  year: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Year", 
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model("Section",sectionSchema);
