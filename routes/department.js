const Department = require("../models/department"); // Import Department Model Schema
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const { logger } = require("../middleware/logger");

module.exports = (router) => {
  router.get(
    "/getAllDepartmentDropdown",

    async (req, res) => {
      let data = [];
      try {
        let campus = await Department.find({
          deleted: false,
          status: "active",
        });
        data.push(
          campus.map((e) => {
            return {
              name: e.department.replace(/\b\w/g, (char) => char.toUpperCase()),
              code: e.department,
              id: e.id,
            };
          })
        );
        await res.json({
          success: true,
          data: data,
        });
      } catch (error) {
        res.json({ success: false, message: error });
      }
    }
  );

  router.get(
    "/getAllDepartmentForDashboard",

    async (req, res) => {
      let data = [];
      try {
        let departmentCount = await Department.countDocuments();
        let departmentActive = await Department.countDocuments({
          deleted: false,
          status: "active",
        });
        let departmentInactive = await Department.countDocuments({
          deleted: true,
          status: "inactive",
        });
        data.push({
          departmentCount: departmentCount,
          departmentActive: departmentActive,
          departmentInactive: departmentInactive,
        });
        res.json({ success: true, data: data });
      } catch (error) {
        res.json({ success: false, message: error });
      }

      let params = JSON.stringify(req.params);
      let query = JSON.stringify(req.query);
      let body = JSON.stringify(req.body);
      // logger.info(
      //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
      //     req.statusCode
      //   }|${req.socket.remoteAddress}|${Date.now()}`
      // );
    }
  );

  router.get("/getAllDepartment", (req, res) => {
    Department.find(
      { deleted: false },
      {
        id: 1,
        department: 1,
        status: 1,
        deleted: 1,
        department_head: 1,
        user_id: 1,
      },
      (err, department) => {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!department || department.length === 0) {
            res.json({
              success: false,
              message: "No Department found.",
              department: [],
            });
          } else {
            res.json({ success: true, departments: department });
          }
        }
      }
    ).sort({ _id: -1 });

    let params = JSON.stringify(req.params);
    let query = JSON.stringify(req.query);
    let body = JSON.stringify(req.body);
    // logger.info(
    //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
    //     req.statusCode
    //   }|${req.socket.remoteAddress}|${Date.now()}`
    // );
  });

  router.post("/findDepartmentById", (req, res) => {
    Department.findOne(
      { id: req.body.id },
      "-deleted -__v",
      function (err, department) {
        if (err) {
          res.json({ success: false, message: "Department not found" });
        } else {
          if (!department) {
            res.json({ success: false, message: "No Department found." });
          } else {
            res.json({ success: true, department: department });
          }
        }
      }
    );

    let params = JSON.stringify(req.params);
    let query = JSON.stringify(req.query);
    let body = JSON.stringify(req.body);
    // logger.info(
    //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
    //     req.statusCode
    //   }|${req.socket.remoteAddress}|${Date.now()}`
    // );
  });

  router.post("/addDepartment", (req, res) => {
    const { department } = req.body;

    console.log(department);

    if (!department) {
      return res.json({
        success: false,
        message: "You must provide an Department Name",
      });
    }

    const departmentData = {
      id: uuidv4(),
      department: department.departmentName.toLowerCase(),
      department_head: department.department_head.name.toLowerCase(),
      user_id: department.department_head.code.toLowerCase(),
    };

    const existingDepartment = Department.findOne({
      department: departmentData.department,
    });

    if (existingDepartment) {
      return res.json({
        success: false,
        message: "Department Name already exists",
      });
    }

    Department.create(departmentData)
      .then((data) =>
        res.json({
          success: true,
          message: "This department is successfully Added ",
          data: { department: data.department },
        })
      )
      .catch((err) => {
        if (err.code === 11000) {
          res.json({
            success: false,
            message: "Department Name already exists ",
            err: err.message,
          });
        } else if (err.errors) {
          const errors = Object.keys(err.errors);
          res.json({ success: false, message: err.errors[errors[0]].message });
        } else {
          res.json({
            success: false,
            message: "Could not add department Error : " + err.message,
          });
        }
      });

    let params = JSON.stringify(req.params);
    let query = JSON.stringify(req.query);
    let body = JSON.stringify(req.body);
    // logger.info(
    //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
    //     req.statusCode
    //   }|${req.socket.remoteAddress}|${Date.now()}`
    // );
  });

  router.post("/addDepartments", (req, res) => {
    const departments = req.body;
    if (
      !departments ||
      !Array.isArray(departments) ||
      departments.length === 0
    ) {
      return res.json({
        success: false,
        message: "You must provide an array of Department Names",
      });
    }

    const departmentPromises = departments.map((departmentObj) => {
      if (!departmentObj.department) {
        return Promise.resolve({
          success: false,
          message: "Department Name is missing in one of the objects",
        });
      }

      const departmentData = {
        id: uuidv4(),
        department: departmentObj.department.toLowerCase(),
      };

      return Department.create(departmentData)
        .then((data) => ({
          success: true,
          message: "This department is successfully Added",
          data: { department: data.department },
        }))
        .catch((err) => {
          if (err.code === 11000) {
            return {
              success: false,
              message: "Department Name already exists",
              err: err.message,
            };
          } else if (err.errors) {
            const errors = Object.keys(err.errors);
            return { success: false, message: err.errors[errors[0]].message };
          } else {
            return {
              success: false,
              message: "Could not add department Error: " + err.message,
            };
          }
        });
    });

    Promise.all(departmentPromises)
      .then((results) => res.json(results))
      .catch((err) =>
        res.json({
          success: false,
          message: "An error occurred while adding departments",
          err: err.message,
        })
      );

    let params = JSON.stringify(req.params);
    let query = JSON.stringify(req.query);
    let body = JSON.stringify(req.body);
    // logger.info(
    //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
    //     req.statusCode
    //   }|${req.socket.remoteAddress}|${Date.now()}`
    // );
  });

  router.put("/deleteDepartment", (req, res) => {
    let data = req.body;

    Department.deleteOne(
      {
        id: data.id,
      },
      (err, results) => {
        if (err) {
          res.json({
            success: false,
            message: "Could not Delete Department" + err,
          });
        } else {
          res.json({
            success: true,
            message: " Successfully Deleted the Department",
            data: results,
          });
        }
      }
    );

    let params = JSON.stringify(req.params);
    let query = JSON.stringify(req.query);
    let body = JSON.stringify(req.body);
    // logger.info(
    //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
    //     req.statusCode
    //   }|${req.socket.remoteAddress}|${Date.now()}`
    // );
  });

  router.put("/setInactiveDepartment", (req, res) => {
    let data = req.body;

    Department.findOne(
      {
        id: data.id,
      },
      (err) => {
        if (err) throw err;
        Department.findOneAndUpdate(
          { id: data.id },
          { deleted: true, status: "inactive" },
          { upsert: true, select: "-__v" },
          (err, response) => {
            if (err) return res.json({ success: false, message: err.message });
            if (response) {
              res.json({
                success: true,
                message: " Successfully Delete Department",
                data: response,
              });
            } else {
              res.json({
                success: false,
                message: "Could Delete Department" + err,
              });
            }
          }
        );
      }
    );
    let params = JSON.stringify(req.params);
    let query = JSON.stringify(req.query);
    let body = JSON.stringify(req.body);
    // logger.info(
    //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
    //     req.statusCode
    //   }|${req.socket.remoteAddress}|${Date.now()}`
    // );
  });

  router.put(
    "/changeDepartmentStatus",

    (req, res) => {
      let data = req.body;
      Department.findOne(
        {
          id: data.id,
        },
        (err, department) => {
          if (err) throw err;
          Department.findOneAndUpdate(
            { id: data.id },
            { status: department.status === "active" ? "inactive" : "active" },
            { upsert: true, select: "-__v" },
            (err, response) => {
              if (err)
                return res.json({ success: false, message: err.message });
              if (!response) {
                res.json({
                  success: false,
                  message: " Something wrong setting Status" + err,
                });
              } else {
                res.json({
                  success: true,
                  message: " Successfully set Status",
                  data: response,
                });
              }
            }
          );
        }
      );
      let params = JSON.stringify(req.params);
      let query = JSON.stringify(req.query);
      let body = JSON.stringify(req.body);
      // logger.info(
      //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
      //     req.statusCode
      //   }|${req.socket.remoteAddress}|${Date.now()}`
      // );
    }
  );

  router.put(
    "/updateDepartment",

    async (req, res) => {
      let { id, ...department } = req.body;

      console.log(department);

      let departmentData = department;
      Department.findOneAndUpdate(
        { id: id },
        departmentData,
        { new: true },
        (err, response) => {
          if (err) return res.json({ success: false, message: err.message });
          if (response) {
            res.json({
              success: true,
              message: "Department Information has been updated!",
              data: response,
            });
          } else {
            res.json({
              success: true,
              message: "No Department has been modified!",
              data: response,
            });
          }
        }
      );
      let params = JSON.stringify(req.params);
      let query = JSON.stringify(req.query);
      let body = JSON.stringify(req.body);
      // logger.info(
      //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
      //     req.statusCode
      //   }|${req.socket.remoteAddress}|${Date.now()}`
      // );
    }
  );

  return router;
};
