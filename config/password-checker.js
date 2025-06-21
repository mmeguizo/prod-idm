let bcrypt = require("bcryptjs");
const { response } = require("express");

module.exports.checkPassword = function (password, hash) {
  return bcrypt.compare(password, hash, (err, res) => {});
};
