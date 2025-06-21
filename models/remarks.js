const mongoose = require("mongoose");
const { Schema } = mongoose;

const remarks = new Schema(
  {
    remarks: String,
    userId: String,
    objectiveId: String,
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("remarks", remarks);
