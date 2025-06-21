const File = require("../models/fileupload"); // Import User Model Schema
const { v4: uuidv4 } = require("uuid");
const hash = require("../config/password-hasher");
const mongoose = require("mongoose");
let bcrypt = require("bcryptjs");
const formidable = require("formidable");
const path = require("path");
const ObjectId = mongoose.Types.ObjectId;
let fs = require("fs");
let md5 = require("md5");
// const { logger } = require("../middleware/logger");
const Logs = require("../models/logs");
const User = require("../models/user");
const Objectives = require("../models/objective");
const Notifications = require("../models/notifications");
module.exports = (router) => {
  router.post(
    "/addMultipleFiles/:user_id/:objective_id/:uploadObjectiveFilemonth",

    async (req, res) => {
      let ReturnData = [];
      let useFor = "files";
      let form = new formidable.IncomingForm({ multiples: true });
      form.maxFileSize = 2500 * 1024 * 1024; // Adjust max file size as needed
      form.uploadDir = path.join(__dirname, "..", "images/files");

      const uploadedFiles = []; // Array to store uploaded file details

      form.on("file", async (field, file) => {
        const newFileName = [
          useFor,
          Math.random(),
          Math.random(),
          Math.random(),
        ].join("");
        const ext = file.originalFilename.split(".").pop();
        const finalFileName = `${md5(newFileName)}${ext ? `.${ext}` : ""}`;

        try {
          const filePath = file.filepath; // Assuming `filepath` property exists
          const readStream = fs.createReadStream(filePath);

          await new Promise((resolve, reject) => {
            const fileStream = fs.createWriteStream(
              path.join(form.uploadDir, finalFileName)
            );
            fileStream.on("error", (err) => reject(err));
            fileStream.on("finish", () => resolve());
            readStream.pipe(fileStream); // Pipe the read stream to the write stream
          });

          const uploadedFiles = [];

          const fileData = {
            id: uuidv4(),
            user_id: req.params.user_id,
            objective_id: req.params.objective_id,
            source: finalFileName,
            for: "files",
            filetype: file.mimetype.split("/")[0],
          };

          if (req.params.uploadObjectiveFilemonth) {
            fileData[req.params.uploadObjectiveFilemonth] = finalFileName;
          }

          uploadedFiles.push(new File(fileData));

          let savePromises = uploadedFiles.map((file) => {
            return new Promise((resolve, reject) => {
              file.save((err, data) => {
                if (err) {
                  reject(err);
                } else {
                  // Notifications.create({
                  //   userId: req.decoded.id,
                  //   message: `New goal added: ${goals}`,
                  //   type: "goal_added",
                  //   createdAt: new Date(),
                  //   metadata: goalsDataRequest,
                  // });

                  resolve(data);
                }
              });
            });
          });

          Promise.all(savePromises)
            .then((data) => {
              const fileNames = data.map((file) => file.source);

              // Add notification
              // Notifications.create({
              //   userId: req.decoded.id,
              //   message: `Successfully uploaded ${fileNames.length} file(s)`,
              //   type: "file_upload",
              //   createdAt: new Date(),
              //   metadata: { files: fileNames },
              // });

              res.json({
                success: true,
                message: "Files uploaded successfully!",
                fileNames: fileNames,
              });
            })
            .catch((err) => {
              console.error("Error uploading file:", err);
            });
        } catch (err) {
          console.error("Error uploading file:", err);
        }
      });

      // form.on("progress", (bytesReceived, bytesExpected) => {
      //   console.log("Progress:", bytesReceived, bytesExpected);
      // });

      form.on("error", (err) => {
        console.error("An error occurred:", err);
      });

      form.on("end", async () => {
        console.log("Finished uploading files");
      });

      form.parse(req);

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

  router.post("/addObjectiveFiles/:user_id/", async (req, res) => {
    console.log({ addMultipleFiles: req.body });
    let ReturnData = [];
    let useFor = "files";
    let form = new formidable.IncomingForm({ multiples: true });
    form.maxFileSize = 2500 * 1024 * 1024; // Adjust max file size as needed
    form.uploadDir = path.join(__dirname, "..", "images/files");

    const uploadedFiles = []; // Array to store uploaded file details

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err);
        return res
          .status(500)
          .json({ success: false, message: "Error parsing form" });
      }

      const objectiveId = fields.objectiveId;
      const frequencyFileName = fields.frequencyFileName;

      console.log({
        objectiveId,
        frequencyFileName,
      });

      // Check if files.files is an array or a single object
      const fileArray = Array.isArray(files.files)
        ? files.files
        : [files.files];

      for (const file of fileArray) {
        const newFileName = [
          useFor,
          Math.random(),
          Math.random(),
          Math.random(),
        ].join("");
        const ext = file.originalFilename.split(".").pop();
        const finalFileName = `${md5(newFileName)}${ext ? `.${ext}` : ""}`;

        try {
          const filePath = file.filepath; // Assuming `filepath` property exists
          const readStream = fs.createReadStream(filePath);

          await new Promise((resolve, reject) => {
            const fileStream = fs.createWriteStream(
              path.join(form.uploadDir, finalFileName)
            );
            fileStream.on("error", (err) => reject(err));
            fileStream.on("finish", () => resolve());
            readStream.pipe(fileStream); // Pipe the read stream to the write stream
          });

          const fileData = {
            id: uuidv4(),
            user_id: req.params.user_id,
            objective_id: objectiveId,
            source: finalFileName,
            for: "files",
            filetype: file.mimetype.split("/")[0],
            // frequencyFileName: frequencyFileName || null,
          };

          if (frequencyFileName) {
            fileData[frequencyFileName] = finalFileName;
          }

          uploadedFiles.push(new File(fileData));
        } catch (err) {
          console.error("Error uploading file:", err);
        }
      }

      try {
        let savePromises = uploadedFiles.map((file) => {
          return new Promise((resolve, reject) => {
            file.save((err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            });
          });
        });

        const data = await Promise.all(savePromises);
        console.log("Files Saving success....:");
        const fileNames = data.map((file) => file.source);

        // Add notification
        // await Notifications.create({
        //   userId: req.decoded.id,
        //   message: `Successfully uploaded ${fileNames.length} file(s) to objective`,
        //   type: "objective_file_upload",
        //   createdAt: new Date(),
        //   metadata: {
        //     files: fileNames,
        //     objectiveId: objectiveId,
        //     frequencyFileName: frequencyFileName,
        //   },
        // });
        res.json({
          success: true,
          message: "Files uploaded successfully!",
          fileNames: fileNames,
        });
      } catch (err) {
        console.error("Error saving files:", err);
        res.status(500).json({ success: false, message: "Error saving files" });
      }
    });

    form.on("progress", (bytesReceived, bytesExpected) => {
      console.log("Progress:", bytesReceived, bytesExpected);
    });

    form.on("error", (err) => {
      console.error("An error occurred:", err);
    });

    form.on("end", async () => {
      console.log("Finished uploading files");
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

  router.post("/addFile/:user_id", async (req, res) => {
    let useFor = "files";
    let formidable = require("formidable");
    let fs = require("fs");
    let path = require("path");
    let md5 = require("md5");

    var form = new formidable.IncomingForm();

    form.maxFileSize = 2500 * 1024 * 1024;
    form.multiples = true;

    form.uploadDir = path.join(__dirname, "..", "images/files");

    form.on("file", function (field, file) {
      let newFileName = [useFor, Math.random(), Math.random(), Math.random()];

      newFileName = `${md5(newFileName.join(""))}.${file.originalFilename
        .split(".")
        .pop()}`;

      fs.rename(file.filepath, path.join(form.uploadDir, newFileName), () => {
        let uploadData = new File({
          id: uuidv4(),
          user_id: req.params.user_id,
          source: newFileName,
          for: "files",
          filetype: file.mimetype.substring(0, file.mimetype.indexOf("/")),
        });
        uploadData.save((err, data) => {
          if (err) {
            res.json({
              success: false,
              message: "Error, could not save avatar : " + err,
            });
          } else {
            // Add notification
            // Notifications.create({
            //   userId: req.decoded.id,
            //   message: "Profile avatar updated successfully",
            //   type: "avatar_update",
            //   createdAt: new Date(),
            //   metadata: { avatarFile: data.source }
            // });
        
            res.json({
              success: true,
              message: "Avatar uploaded successfully ",
              data: data,
            });
          }
        });
      });
    });

    form.on("progress", (bytesReceived, bytesExpected) => {});

    process.on("uncaughtException", function (err) {
      //this does nothing
      console.log(err);
      throw err;
    });

    form.on("error", function (err) {
      console.log("An error has occured: \n" + err);
      res.eventEmitter("error");
    });

    form.on("end", function () {
      console.log("finished uploading");
    });

    form.parse(req, async (err, fields, files) => {
      let returnMe = [];

      returnMe.push([fields, files]);

      if (err) {
        next(err);
        return;
      }
      return await res.json({
        success: true,
        message: "Files uploaded successfully ",
        data: returnMe,
      });
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

  router.post("/addAvatar", (req, res) => {
    let useFor = req.body.useFor;
    let username = "tester";
    let formidable = require("formidable");
    let fs = require("fs");
    let path = require("path");
    let md5 = require("md5");

    var form = new formidable.IncomingForm();
    form.uploadDir = `${__dirname}/../images/`;
    form.on("file", async (field, file) => {
      let newFileName = [username, Math.random(), Math.random(), Math.random()];

      newFileName = `${md5(newFileName.join(""))}.${file.originalFilename
        .split(".")
        .pop()}`;

      if (fs.existsSync(file.filepath)) {
        fs.rename(
          file.filepath,
          path.join(form.uploadDir, newFileName),
          (err) => {
            if (err) {
              return res.json({
                success: false,
                message: err.name + " " + err.message,
              });
            } else {
              let uploadData = new File({
                id: uuidv4(),
                source: newFileName,
                user_id: req.decoded.id,
                for: "avatar",
                objective_id: "dummy_id",
                filetype: file.mimetype.substring(
                  0,
                  file.mimetype.indexOf("/")
                ),
              });

              uploadData.save((err, data) => {
                if (err) {
                  res.json({
                    success: false,
                    message: "Error, could not save avatar : " + err,
                  });
                } else {

                  // Notifications.create({
                  //   userId: req.decoded.id,
                  //   message: "Profile avatar updated successfully",
                  //   type: "avatar_update",
                  //   createdAt: new Date(),
                  //   metadata: { avatarFile: data.source }
                  // });

                  res.json({
                    success: true,
                    message: "Avatar uploaded successfully ",
                    data: data,
                  });
                }
              });
            }
          }
        );
      } else {
        return res.json({
          success: false,
          message: "Something went wrong please re-upload your image.",
        });
      }
    });

    form.on("error", function (err) {
      console.log("An error has occured: \n" + err);
    });
    form.on("end", function () {
      console.log("end");
    });
    form.parse(req);
    let params = JSON.stringify(req.params);
    let query = JSON.stringify(req.query);
    let body = JSON.stringify(req.body);
    // logger.info(
    //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
    //     req.statusCode
    //   }|${req.socket.remoteAddress}|${Date.now()}`
    // );
  });

  router.put("/deleteFile", (req, res) => {
    let file = req.body.link.source;
    let id = req.body.link.id;

    let fs = require("fs");
    fs.unlink(
      `${path.join(__dirname, "..", "images/files")}/${file}`,
      (err) => {
        if (err) {
          return res.json({
            success: false,
            message: "The server cant find the file.",
          });
        } else {
          File.deleteOne({ id: id }, (err, results) => {
            if (err) {
              return res.json({ success: false, message: err.message });
            } else {

              // Notifications.create({
              //   userId:req.decoded.id,
              //   message: "File deleted successfully",
              //   type: "file_delete",
              //   createdAt: new Date(),
              //   metadata: { 
              //     fileId: id,
              //     fileName: file 
              //   }
              // });
              return res.json({
                success: true,
                message: "The file has been remove.",
              });
            }
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

  router.put("/deleteFileObjective", (req, res) => {
    let file = req.body.source;
    let id = req.body.id;
    let fs = require("fs");

    File.findOne(
      {
        id: id,
      },
      (err) => {
        if (err) throw err;
        File.findOneAndUpdate(
          { id: id },
          { status: false },
          { upsert: true, select: "-__v" },
          (err, response) => {
            if (err) return res.json({ success: false, message: err.message });
            if (response) {

              //  Notifications.create({
              //   userId:  req.decoded.id,
              //   message: "Objective file deleted successfully",
              //   type: "objective_file_delete",
              //   createdAt: new Date(),
              //   metadata: { 
              //     fileId: id,
              //     fileName: file 
              //   }
              // });

              res.json({
                success: true,
                message: "File Deleted",
                data: response,
              });
            } else {
              res.json({
                success: false,
                message: "Error Occured",
              });
            }
          }
        ).sort({ date_added: 1 });
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

  router.get("/getAllFiles/:user_id", (req, res) => {
    let query = req.params;

    File.find(query, (err, files) => {
      if (err) {
        return res.json({ success: false, message: err.message });
      } else {
        return res.json({ success: true, message: "Files", data: files });
      }
    });
    let params = JSON.stringify(req.params);
    let body = JSON.stringify(req.body);
    // logger.info(
    //   ` ${req.method}|${params}|${query}|${req.originalUrl}|${body}|${
    //     req.statusCode
    //   }|${req.socket.remoteAddress}|${Date.now()}`
    // );
  });

  router.get(
    "/getAllFilesFromObjective/:user_id/:objective_id",

    async (req, res) => {
      try {
        const { user_id, objective_id } = req.params;

        const fileOwnerObjectives = await Objectives.find({ id: objective_id });
        const fileOwner = fileOwnerObjectives[0]?.userId;

        const files = await File.aggregate([
          {
            $match: {
              status: true,
              user_id: fileOwner || user_id,
              objective_id: objective_id,
              for: "files",
            },
          },
          {
            $lookup: {
              as: "objectives",
              from: "objectives",
              foreignField: "id",
              localField: "objective_id",
            },
          },
          {
            $unwind: {
              path: "$objectives",
              preserveNullAndEmptyArrays: true,
            },
          },
        ]);

        return res.json({ success: true, message: "Files", data: files });
      } catch (err) {
        return res.json({ success: false, message: err.message });
      }
    }
  );
  router.get(
    "/getAllFilesHistoryFromObjectiveLoad/:user_id/:objective_id",
    async (req, res) => {
      try {
        const { user_id, objective_id } = req.params;

        const fileOwnerObjectives = await Objectives.find({ id: objective_id });
        const fileOwner = fileOwnerObjectives[0]?.userId;

        const filesData = await File.find(
          {
            user_id: fileOwner || user_id,
            objective_id: objective_id,
            for: "files",
          },
          {
            __v: 0.0,
          }
        ).sort({
          createdAt: -1,
        });

        res.json({ success: true, message: "Files", data: filesData });
      } catch (err) {
        res.json({ success: false, message: err.message });
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

  return router;
};
