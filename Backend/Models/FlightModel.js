const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flight: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Flight", flightSchema);


