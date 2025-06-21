const mongoose = require("mongoose");
let bcrypt = require("bcryptjs");
const email = require("./validators/user-validators");
const username = require("./validators/user-validators");
const password = require("./validators/user-validators");
const { Schema } = mongoose;
const Objective = require("./objective");
const ObjectId = mongoose.Types.ObjectId;

const fileUpload = new Schema(
  {
    id: { type: String, required: true },
    source: { type: String, maxlength: 50, required: true },
    user_id: { type: String, required: true },
    for: { type: String, maxlength: 50, required: true },
    date_added: {
      type: Date,
      default: () => new Date(), // <--- new date nodejs less than one day local ph  time
    },
    status: { type: Boolean, default: true },
    filetype: { type: String, default: "" },
    objective_id: { type: String, required: true },
    // added_by:           { type:Number, maxlength:7, required:true },

    // needed for file updload in objectives
    file_month_0: { type: String },
    file_month_1: { type: String },
    file_month_2: { type: String },
    file_month_3: { type: String },
    file_month_4: { type: String },
    file_month_5: { type: String },
    file_month_6: { type: String },
    file_month_7: { type: String },
    file_month_8: { type: String },
    file_month_9: { type: String },
    file_month_10: { type: String },
    file_month_11: { type: String },

    file_quarter_1: { type: String },
    file_quarter_2: { type: String },
    file_quarter_3: { type: String },
    file_quarter_0: { type: String },

    file_semi_annual_0: { type: String },
    file_semi_annual_1: { type: String },
    file_semi_annual_2: { type: String },

    file_yearly_0: { type: String },
  },
  {
    timestamps: true,
  }
);

// sample
// fileUpload.pre("save", function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   } else {
//     bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(this.password, salt, (err, hash) => {
//         if (err) return next(err); // Ensure no errors
//         this.password = hash; // Apply encryption to password
//         next(err); // Exit middleware
//       });
//     });
//   }
// });

fileUpload.pre("findOneAndUpdate", async function () {
  const docToUpdate = await this.model.findOne(this.getQuery());
  if (docToUpdate) {
    const objectiveId = docToUpdate.objective_id;
    const fileFields = [
      "file_month_0",
      "file_month_1",
      "file_month_2",
      "file_month_3",
      "file_month_4",
      "file_month_5",
      "file_month_6",
      "file_month_7",
      "file_month_8",
      "file_month_9",
      "file_month_10",
      "file_month_11",
      "file_quarter_0",
      "file_quarter_1",
      "file_quarter_2",
      "file_quarter_3",
      "file_semi_annual_0",
      "file_semi_annual_1",
      "file_semi_annual_2",
    ];

    const updateData = {};
    fileFields.forEach((field) => {
      if (docToUpdate[field]) {
        updateData[field] = "";
      }
    });

    if (Object.keys(updateData).length > 0) {
      await Objective.updateOne({ id: objectiveId }, { $set: updateData });
    }
  }
});

module.exports = mongoose.model("File", fileUpload);
