const mongoose = require("mongoose");
const { Schema } = mongoose;

const aiChat = new Schema(
  {
    chatId: String,
    userId: String,
    prompt: String,
    responseAi: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("aiChat", aiChat);
