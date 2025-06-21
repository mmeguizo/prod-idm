const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { Schema } = mongoose;

const goalsSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    goals: { type: String, required: true, lowercase: true },
    strategic_objective: { type: String, required: true },
    strategic_id: { type: String, required: true },
    campus: { type: String, required: true },
    department: { type: String, required: true },
    budget: { type: Number },
    objectives: [],
    date_added: { type: Date, required: true, default: Date.now },
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now },
    goallistsId: { type: String },
    updatedBy: { type: String },
    updateDate: { type: Date },
    complete: { type: Boolean, default: false },
    objectiveBudget: [
      {
        id: { type: String },
        budget: { type: Number },
      },
    ],
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Export the Goals model
module.exports = mongoose.model("Goals", goalsSchema);
