const User = require("../models/user"); // Import User Model Schema
const { v4: uuidv4 } = require("uuid");
const hash = require("../config/password-hasher");
const mongoose = require("mongoose");
let bcrypt = require("bcryptjs");
// const { logger } = require("../middleware/logger");
const ObjectId = mongoose.Types.ObjectId;
const Department = require("../models/department");

module.exports = (router) => {
  router.get("/getAllVicePresident", async (req, res) => {
    let data = [];
    try {
      let vicePresident = await User.find({
        role: "vice-president",
        deleted: false,
      });

      if (vicePresident.length > 0) {
        data.push(
          vicePresident.map((e) => {
            return {
              name: e.department.replace(/\b\w/g, (char) => char.toUpperCase()),
              code: e.department,
              id: e.id,
              firstname: e.firstname,
              lastname: e.lastname,
              fullname:
                e.firstname.replace(/\b\w/g, (char) => char.toUpperCase()) +
                " " +
                e.lastname.replace(/\b\w/g, (char) => char.toUpperCase()),
              _id: e._id,
            };
          })
        );
      }
      return res.status(200).json({ success: true, data: data });
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }
  });
  router.get("/getAllUsers", async (req, res) => {
    let data = [];
    try {
      let vicePresident = await User.find({
        deleted: false,
      });

      if (vicePresident.length > 0) {
        data.push(
          vicePresident.map((e) => {
            return {
              department: e.department.replace(/\b\w/g, (char) =>
                char.toUpperCase()
              ),
              code: e.department,
              code: e.id,
              firstname: e.firstname,
              lastname: e.lastname,
              name:
                e.firstname.replace(/\b\w/g, (char) => char.toUpperCase()) +
                " " +
                e.lastname.replace(/\b\w/g, (char) => char.toUpperCase()),
              _id: e._id,
            };
          })
        );
      }
      return res.status(200).json({ success: true, data: data });
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }
  });

  router.get("/getAllDirector", async (req, res) => {
    let data = [];
    try {
      let directorData = await User.find({
        role: "director",
        deleted: false,
      });
      // Check if directorData has any items
      if (directorData.length > 0) {
        data.push(
          directorData.map((e) => {
            return {
              name: e.department.replace(/\b\w/g, (char) => char.toUpperCase()),
              code: e.department,
              id: e.id,
              firstname: e.firstname,
              lastname: e.lastname,
              fullname:
                e.firstname.replace(/\b\w/g, (char) => char.toUpperCase()) +
                " " +
                e.lastname.replace(/\b\w/g, (char) => char.toUpperCase()),
              _id: e._id,
            };
          })
        );
      }
      return res.status(200).json({ success: true, data: data });
    } catch (error) {
      return res.status(500).json({ success: false, message: error });
    }
  });

  router.get("/getAllUsersForDashboard", async (req, res) => {
    let data = [];
    try {
      let adminCount = await User.countDocuments({
        deleted: false,
        role: "admin",
      });
      let vicePresidentCount = await User.countDocuments({
        deleted: false,
        role: "vice-president",
      });
      let directorCount = await User.countDocuments({
        deleted: false,
        role: "director",
      });
      let officeHeadCount = await User.countDocuments({
        deleted: false,
        role: "office-head",
      });
      let documentCount = await User.countDocuments({ deleted: false });
      data.push({
        admin: adminCount,
        vice_president: vicePresidentCount,
        director: directorCount,
        office_head: officeHeadCount,
        document: documentCount,
      });
      res.json({ success: true, data: data });
    } catch (error) {
      res.json({ success: false, message: error });
    }
  });

  // router.get("/getAllUsers", (req, res) => {
  //   User.find(
  //     { deleted: false },
  //     { id: 1, email: 1, username: 1, department: 1, role: 1, status: 1 },
  //     (err, users) => {
  //       if (err) {
  //         res.json({ success: false, message: err });
  //       } else {
  //         if (!users) {
  //           res.json({ success: false, message: "No User found." });
  //         } else {
  //           res.json({ success: true, users: users });
  //         }
  //       }
  //     }
  //   ).sort({ _id: -1 });
  // });

  router.get("/getAllUsersAdminDepartments", (req, res) => {
    User.find(
      { deleted: false },
      { id: 1, email: 1, username: 1, department: 1, role: 1, status: 1 },
      (err, users) => {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!users) {
            res.json({ success: false, message: "No User found." });
          } else {
            res.json({ success: true, users: users });
          }
        }
      }
    ).sort({ _id: -1 });
  });


  router.get("/getAllUsersExceptLoggedIn/:id", (req, res) => {
    User.find(
      { id: { $ne: req.params.id }, deleted: false },
      // {
      //   id: 1,
      //   email: 1,
      //   username: 1,
      //   department: 1,
      //   role: 1,
      //   status: 1,
      //   campus: 1,
      // },
      (err, users) => {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!users) {
            res.json({ success: false, message: "No User found." });
          } else {
            res.json({ success: true, users: users });
          }
        }
      }
    ).sort({ _id: -1 });
  });

  router.post("/findById", (req, res) => {
    User.findOne({ id: req.body.id }, function (err, user) {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({ success: false, message: "No User found." });
        } else {
          res.json({ success: true, user: user });
        }
      }
    });
  });

  router.post("/addUser", (req, res) => {
    const {
      email,
      username,
      password,
      confirm,
      department,
      role,
      firstname,
      lastname,
    } = req.body;
    if (
      !email ||
      !username ||
      !password ||
      !firstname ||
      !lastname ||
      !department ||
      !role ||
      password !== confirm
    ) {
      return res.json({
        success: false,
        message:
          "You must provide an email, username, department,firstname , lastname, role, password and matching password",
      });
    }

    const userData = {
      id: uuidv4(),
      firstname: req.body.firstname.toLowerCase(),
      lastname: req.body.lastname.toLowerCase(),
      email: req.body.email.toLowerCase(),
      username: req.body.username.toLowerCase(),
      password: req.body.password,
      department: req.body.department,
      department_id: req.body.department_id,
      vice_president_name: req.body?.vice_president_name || " ",
      vice_president_id: req.body?.vice_president_id || " ",
      director_name: req.body.director_name || " ",
      director_id: req.body?.director_id || "",
      campus: req.body.campus,
      role: req.body.role.toLowerCase(),
    };

    User.create(userData)
      .then((data) => {
        Department.create({
          id: uuidv4(),
          department: req.body.department,
          department_head: req.body.username,
          user_id: req.body.id,
          campus: req.body.campus,
        })
          .then((data) => {
            res.json({
              success: true,
              message: "This user is successfully Registered ",
              data: {
                email,
                firstname,
                lastname,
                username,
                department,
                role,
              },
            });
          })
          .catch((err) => {
            res.json({
              success: false,
              message: "Could not save user Error : " + err,
            });
          });
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.json({
            success: false,
            message: "User name or Email already exists ",
            err: err.message,
          });
        } else if (err.errors) {
          //for specific error email,username and password
          const errors = Object.keys(err.errors);
          res.json({ success: false, message: err.errors[errors[0]].message });
        } else {
          Department;

          res.json({
            success: false,
            message: "Could not save user Error : " + err,
          });
        }
      });
  });

  router.put("/deleteUser", (req, res) => {
    let data = req.body;

    User.deleteOne(
      {
        id: data.id,
      },
      (err, user) => {
        if (err) {
          res.json({ success: false, message: "Could not Delete User" + err });
        } else {
          res.json({
            success: true,
            message: " Successfully Deleted the User",
            data: user,
          });
          // globalconnetion.emitter('user')
        }
      }
    );
  });

  router.put("/setInactiveUser", (req, res) => {
    let data = req.body;

    User.findOne(
      {
        id: data.id,
      },
      (err, user) => {
        if (err) throw err;
        User.findOneAndUpdate(
          { id: data.id },
          {
            deleted: true,
            status: user.status === "active" ? "inactive" : "inactive",
          },
          { upsert: true },
          (err, response) => {
            if (err) return res.json({ success: false, message: err.message });
            if (response) {
              res.json({
                success: true,
                message: " Successfully Delete User",
                data: user,
              });
            } else {
              res.json({ success: false, message: "Could Delete User" + err });
            }
          }
        );
      }
    );
  });

  router.put("/changeUserStatus", (req, res) => {
    let { id } = req.body;
    User.findOne(
      {
        id: id,
      },
      (err, user) => {
        let statusData =
          user.status === "pending"
            ? "active"
            : user.status === "active"
            ? "inactive"
            : "active";

        if (err) throw err;
        User.findOneAndUpdate(
          { id: id },
          { status: statusData },
          { upsert: true },
          (err, response) => {
            if (err) return res.json({ success: false, message: err.message });
            if (!response) {
              res.json({
                success: false,
                message: "Could not set User  Status" + err,
              });
            } else {
              res.json({
                success: true,
                message: " Successfully User set Status",
                data: user,
              });
            }
          }
        );
      }
    );
  });

  router.put("/updateUser", async (req, res) => {
    let data = req.body;
    let saveData = {};
    let userData = {};
    try {
      const user = await User.findOne({ id: req.body.id });

      if (!user) {
        return res.json({ success: false, message: "User not found" });
      }

      if (data.confirm !== data.password) {
        return res.json({
          success: false,
          message: "Passwords do not match",
        });
      }

      if (data.password && data.password.trim() !== "") {
        const checkPassword = await bcrypt.compare(
          data.old_password,
          user.password
        );
        if (!checkPassword) {
          return res.json({
            success: false,
            message: "Incorrect old password",
          });
        }

        const hashedPassword = await hash.encryptPassword(data.password);
        saveData.password = hashedPassword;
      }

      const response = await User.findOneAndUpdate(
        { id: data.id },
        { userData, ...req.body },
        {
          new: true,
        }
      );

      if (response) {
        res.json({
          success: true,
          message: "User information has been updated!",
          data: response,
        });
      } else {
        res.json({
          success: true,
          message: "No user has been modified!",
        });
      }
    } catch (err) {
      res.json({ success: false, message: err.message });
    }
  });
  router.put("/updateUserAdmin", async (req, res) => {
    let data = req.body;
    let saveData = {};
    let userData = {};

    console.log({ updateUserAdmin: data });

    try {
      const user = await User.findOne({ id: req.body.id });
      if (!user) {
        return res.json({ success: false, message: "User not found" });
      }

      if (data.password && data.confirm && data.password.trim() !== "") {
        if (data.password !== data.confirm) {
          return res.json({
            success: false,
            message: "Passwords do not match",
          });
        }
        const hashedPassword = await hash.encryptPassword(data.password);
        data.password = hashedPassword;
      }

      const response = await User.findOneAndUpdate(
        { id: data.id },
        { userData, ...req.body },
        {
          new: true,
        }
      );

      if (response) {
        const results = await Department.findOneAndUpdate(
          { id: data.department_id },
          { $set: { department_head: data.username, user_id: data.id } },
          { new: true, upsert: true }
        );

        console.log("Department update results:", results);

        res.json({
          success: true,
          message: "User information has been updated!",
          data: response,
        });
      } else {
        res.json({
          success: true,
          message: "No user has been modified!",
        });
      }
    } catch (err) {
      res.json({ success: false, message: err.message });
    }

    // const checkPassword = await bcrypt.compare(
    //   data.old_password,
    //   user.password
    // );
    // if (!checkPassword) {
    //   return res.json({
    //     success: false,
    //     message: "Incorrect old password",
    //   });
    // }
  });

  router.put("/updateProfile", async (req, res) => {
    let data = req.body;
    let userData = {};

    const user = await User.findOne({ id: req.body.id });

    if (data.confirmPassword !== data.password) {
      res.json({
        success: false,
        message:
          "Password not match : " + data.password + " for " + data.username,
      });
    } else if (data.confirmPassword && data.confirmPassword.trim() !== "") {
      let checkPassword = await bcrypt.compare(
        data.old_password,
        user.password
      );
      if (!checkPassword) {
        res.json({
          success: false,
          message:
            "Incorrect Old Password : " +
            data.password +
            " for " +
            data.username,
        });
      } else {
        hash
          .encryptPassword(data.password)
          .then((hash) => {
            userData.role = data.role;
            userData.firstname = data.firstname;
            userData.lastname = data.lastname;
            userData.username = data.username;
            userData.email = data.email;
            userData.password = hash;
            userData.profile_pic = data.profile_pic;
            User.findOneAndUpdate(
              { id: data.id },
              userData,
              { upsert: true },
              (err, response) => {
                if (err)
                  return res.json({ success: false, message: err.message });
                if (response) {
                  res.json({
                    success: true,
                    message: "User Information has been updated!",
                    data: response,
                  });
                } else {
                  res.json({
                    success: true,
                    message: "No User has been modified!",
                    data: response,
                  });
                }
              }
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      const { username, email, profile_pic, firstname, lastname, id } =
        req.body;

      User.findOneAndUpdate(
        { id: id },
        { username, email, profile_pic, firstname, lastname },
        { upsert: false },
        (err, response) => {
          if (err) return res.json({ success: false, message: err.message });
          if (response) {
            res.json({
              success: true,
              message: "User Information has been updated!",
              data: response,
            });
          } else {
            res.json({
              success: true,
              message: "No User has been modified!",
              data: response,
            });
          }
        }
      );
    }
  });

  router.get("/profile/:id", (req, res) => {
    User.findOne({ id: req.params.id })
      .select("firstname lastname username email profile_pic")
      .exec((err, user) => {
        if (err) {
          res.json({ success: false, message: err.message });
        } else {
          if (!user) {
            res.json({ success: false, message: "User not found" });
          } else {
            res.json({ success: true, user: user });
          }
        }
      });
  });

  router.get("/UserProfilePic/:id", (req, res) => {
    User.findOne({ profile_pic: req.params.id })
      .select("profile_pic")
      .exec((err, user) => {
        if (err) {
          res.json({ success: false, message: err.message });
        } else {
          if (!user) {
            res.json({ success: false, message: "UserPic not found" });
          } else {
            res.json({ success: true, picture: user });
          }
        }
      });
  });

  return router;
};
