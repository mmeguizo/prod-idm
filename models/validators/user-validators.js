//email validators
let emailLengthChecker = (email) => {
  if (!email) {
    return false;
  } else {
    if (email.length < 5 || email.length > 30) {
      return false;
    } else {
      return true;
    }
  }
};

// let validEmailChecker = (email) => {
//   //test@chmsu.edu.ph
//   if (!email) {
//     console.log("no email");
//     return false;
//   } else {
//     console.log("email: " + email);
//     const regExp = new RegExp(/^([^\s@]+@[^\s@]+\.)chmsu\.edu\.ph$/);
//     console.log(regExp.test(email));
//     return regExp.test(email);
//   }
// };

let validEmailChecker = (email) => {
  if (!email) {
    return false;
  } else {
    const regExp = new RegExp(/^([^\s@]+)@chmsu\.edu\.ph$/);
    return regExp.test(email);
  }
};

module.exports.emailValidator = [
  {
    validator: emailLengthChecker,
    message:
      "Email must be at least 5 characters but no more than 30 characters",
  },
  {
    validator: validEmailChecker,
    message:
      "Enter a valid email address (only Chmsu domain: chmsu.edu.ph accepted)",
  },
];

//usernanme validators

let usernameLengthChecker = (username) => {
  console.log("username: " + username);

  if (!username) {
    return false;
  } else {
    if (username.length < 3 || username.length > 15) {
      return false;
    } else {
      return true;
    }
  }
};

let validUsername = (username) => {
  if (!username) {
    return false;
  } else {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(username); // Return regular expression test result (true or false)
  }
};

module.exports.usernameValidators = [
  {
    validator: usernameLengthChecker,
    message:
      "Username should be at least 3 characters long and at least 15 characters",
  },
  {
    validator: validUsername,
    message: "Username should be alphanumeric and no special characters",
  },
];

//password validators

let passwordLengthChecker = (password) => {
  if (!password) {
    return false;
  } else {
    if (password.length < 8 || password.length > 35) {
      return false;
    } else {
      return true;
    }
  }
};

let validPassword = (password) => {
  if (!password) {
    return false;
  } else {
    const regExp = new RegExp(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/
    );
    return regExp.test(password); // Return regular expression test result (true or false)
  }
};

module.exports.passwordValidator = [
  {
    validator: passwordLengthChecker,
    message:
      "Password must be at least 8 characters long but not more than 35 characters long",
  },
  {
    validator: validPassword,
    message:
      "Password must have at least one upper case,  lower case letter, special characters and numbers",
  },
];
