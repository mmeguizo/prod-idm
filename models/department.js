const mongoose = require("mongoose");

const { Schema } = mongoose;

const departmentSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    department: {
      type: String,
      required: true,
      lowercase: true,
    },
    department_head: { type: String, default: "unassigned" },
    user_id: { type: String, default: "unassigned" },
    campus: { type: String, required: false, default: "Talisay" },
    status: { type: String, default: "active" },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", departmentSchema);
