const mongoose = require("mongoose");
let bcrypt = require("bcryptjs");
const email = require("../models/validators/user-validators");
const username = require("../models/validators/user-validators");
const password = require("../models/validators/user-validators");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: email.emailValidator,
    },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: username.usernameValidators,
    },
    campus: { type: String, required: true },
    department: { type: String, default: "" },
    role: {
      type: String,
      enum: ["admin", "president", "vice-president", "director", "office-head"],
      default: "office-head",
    },
    department_id: { type: String, default: "" },
    vice_president_id: { type: String, default: "" },
    vice_president_name: { type: String, default: "" },
    director_id: { type: String, default: "" },
    director_name: { type: String, default: "" },
    office_head_id: { type: String, default: "" },
    office_head_name: { type: String, default: "" },
    status: { type: String, default: "pending" },
    deleted: { type: Boolean, default: false },
    password: {
      type: String,
      required: true,
      validate: password.passwordValidator,
    },
    profile_pic: { type: String, default: "no-photo.png" },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) return next(err); // Ensure no errors
        this.password = hash; // Apply encryption to password
        next(err); // Exit middleware
      });
    });
  }
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password); // this return a promise
};

module.exports = mongoose.model("User", userSchema);
