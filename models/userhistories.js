const mongoose = require("mongoose");
const { Schema } = mongoose;

const userHistory = new Schema(
  {
    userId: String, // Reference to the user document
    timestamp: { type: Date, default: Date.now }, // Date and time of activity
    activityType: String,
    activityDetails: {
      url: String, // (for page views)
      data: {}, // (for searches)
      action: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userHistory", userHistory);
