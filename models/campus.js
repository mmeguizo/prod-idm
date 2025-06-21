const mongoose = require("mongoose");
const { Schema } = mongoose;

const campus = new Schema(
  {
    campusName: { type: String, required: true },
    campusId: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Campus", campus);
