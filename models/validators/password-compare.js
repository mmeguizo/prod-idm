
let bcrypt = require('bcryptjs');


module.exports = function comparePassword (password, hash) {
    return bcrypt.compare(password, hash); // this return a promise
  }
