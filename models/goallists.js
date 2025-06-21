const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { Schema } = mongoose;

const goallistsSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    goals: { type: String, required: true, lowercase: true },
    objectives: [
      {
        id: { type: String, unique: true },
        objective: { type: String, lowercase: true },
        createdBy: { type: String },
        createdAt: { type: Date, default: Date.now },
        deleted: { type: Boolean, default: false },
      },
    ],
    date_added: { type: Date, required: true, default: Date.now },
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Export the Goals model
module.exports = mongoose.model("Goallists", goallistsSchema);
