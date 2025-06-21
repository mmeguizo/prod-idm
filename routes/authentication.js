const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const { v4: uuidv4 } = require("uuid");
let bcrypt = require("bcryptjs");
const comparePassword = require("../models/validators/password-compare");
// const { logger, logMiddleware } = require("../middleware/logger");

module.exports = (router) => {
  router.post("/register", (req, res) => {
    const { email, username, password, confirm } = req.body;
    if (!email)
      return res.json({ success: false, message: "You must provide an email" });
    if (!username)
      return res.json({
        success: false,
        message: "You must provide an username",
      });
    if (!password)
      return res.json({ success: false, message: "Provide a Password" });
    if (!confirm)
      return res.json({
        success: false,
        message: "Provide a Matching Password",
      });
    if (password !== confirm)
      return res.json({ success: false, message: "Password not match" });

    let user = new User({
      id: uuidv4(),
      email: req.body.email.toLowerCase(),
      username: req.body.username.toLowerCase(),
      password: req.body.password,
      role: "user",
    });

    user.save((err, data) => {
      if (err) {
        if (err.code === 11000) {
          res.json({
            success: false,
            message: "User name or Email already exists ",
            err: err.message,
          });
        } else {
          const errors = Object.keys(err.errors || {});
          if (errors.length) {
            const error = err.errors[errors[0]];
            res.json({
              success: false,
              message: error.message,
            });
          } else {
            res.json({
              success: false,
              message: "Could not save user Error : ",
              err,
            });
          }
        }
      } else {
        res.json({
          success: true,
          message: "Account Registered successfully",
          data: { email: data.email, username: data.username },
        });
      }
    });
    // res.send('POST in authetication')
  });

  router.get("/checkEmail/:email", (req, res) => {
    if (!req.params.email) {
      res.json({ success: false, message: "Email not provided " });
    } else {
      User.findOne({ email: req.params.email }, (err, email) => {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (email) {
            res.json({ success: false, message: "Email already taken" });
          } else {
            res.json({ success: true, message: "Email available" });
          }
        }
      });
    }
  });

  router.get("/checkUsername/:username", (req, res) => {
    if (!req.params.username) {
      res.json({ success: false, message: "Email not provided " });
    } else {
      User.findOne({ username: req.params.username }, (err, username) => {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (username) {
            res.json({ success: false, message: "Username already taken" });
          } else {
            res.json({ success: true, message: "Username available" });
          }
        }
      });
    }
  });

  // new login with network down response
  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!email)
      return res.json({ success: false, message: "No email was provided" });
    if (!password)
      return res.json({ success: false, message: "No password was provided" });

    User.findOne({ email: email.toLowerCase().trim() })
      .then(async (user) => {
        if (!user)
          return res.json({ success: false, message: "User Not Found" });
        if (user.status === "pending")
          return res.json({ success: false, message: "Account Still Pending" });
        if (user.status === "inactive")
          return res.json({
            success: false,
            message: "Your account is inactive",
          });
        if (await comparePassword(req.body.password.trim(), user.password)) {
          //remove _id andpassword from the entries
          let newUser = user.toObject();
          delete newUser.password;
          delete newUser._id;
          delete newUser.__v;

          const token = jwt.sign(newUser, config.secret, {
            expiresIn: "24h",
          });
          let params = JSON.stringify(req.params);
          let query = JSON.stringify(req.query);
          let body = JSON.stringify(req.body);
          // logger.info(
          //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
          //     req.statusCode
          //   }|${req.socket.remoteAddress}|${Date.now()}`
          // );
          res.json({
            success: true,
            message: "Password is Correct",
            token: token,
          });
        } else {
          res.json({
            success: false,
            message: "Password is incorrect",
          });
        }
      })
      .catch((err) => {
        // This will catch any network errors
        res.json({
          success: false,
          message: "Unable to connect to the server. Please try again later.",
        });
      });
  });

  /*
o = {a: 5, b: 6, c: 7}
Object.fromEntries(Object.entries(o).filter(e => e[0] != 'b'))
Object { a: 5, c: 7 }

*/

  // any route that needs authorization or token should be under it if not above this middleware
  router.use((req, res, next) => {
    //'@auth0/angular-jwt' automatically adds token in the headers but it also adds the word 'Bearer ', so we manually format it.
    let token = "";
    let request = req;
    const startTime = Date.now();
    const duration = Date.now() - startTime;

    const data = {
      method: req?.method,
      params: req?.params,
      query: req?.query,
      url: req?.originalUrl,
      body: req?.body,
      status: res.statusCode,
      duration: `${duration}ms`,
      date: Date.now(),
    };

    if (req.headers["authorization"]) {
      // Extract the token by removing the 'Bearer ' part
      // token = req.headers["authorization"].split(" ")[1];
      token = req.headers["authorization"].substring(
        req.headers["authorization"].indexOf(" ") + 1
      );
    }

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided authentication" });
    } else {
      // Decrypt and verify the token
      jwt.verify(token, config.secret, (err, decoded) => {
        if (decoded) {
          data.user = { username, id, role, profile_pic, campus, department } =
            decoded;
          // logMiddleware(data);
        }

        if (err) {
          // Handle expired or invalid token
          if (err.name === "TokenExpiredError") {
            return res.status(401).json({
              success: false,
              message: "Token has expired. Please log in again.",
            });
          } else if (err.name === "JsonWebTokenError") {
            return res.status(400).json({
              success: false,
              message: "Token is invalid: " + err.message,
            });
          } else {
            return res.status(500).json({
              success: false,
              message: "Internal server error Or Token Expired Auth.",
            });
          }
        } else {
          // Assign the decoded token to request headers
          req.decoded = decoded;
          next(); // Proceed to the next middleware or route handler
        }
      });
    }
  });

  return router;
};
