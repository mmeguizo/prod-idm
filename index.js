require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const config = require("./config/database");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const path = require("path");
const office_head_query = require("./routes/office_head_query");
const http = require("http").Server(app);
//path routes
//onst customer = require('./routes/customers')(router);
const authentication = require("./routes/authentication")(router);
const users = require("./routes/users")(router);
const file = require("./routes/fileupload")(router);
const department = require("./routes/department")(router);
const goals = require("./routes/goals")(router);
const objectives = require("./routes/objectives")(router);
const campus = require("./routes/campus")(router);
const log = require("./routes/log")(router);
const userhistory = require("./routes/userhistory")(router);
const ai = require("./routes/ai")(router);
const goallists = require("./routes/goallists")(router);
const director_query = require("./routes/director_query")(router);
const vice_president_query = require("./routes/vice_president_query")(router);
const office_head_query_query = require("./routes/office_head_query")(router);
const remarks = require("./routes/remark")(router);
const notifications = require("./routes/notification")(router);
// const { logMiddleware } = require("./middleware/logger");

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect(config.uri, config.options, (err) => {
  if (err) {
    console.log("cant connect to database " + process.env.DB_NAME);
  } else {
    console.log("connected to the database " + process.env.DB_NAME);
    console.log("running on " + process.env.NODE_ENV + " mode");
    console.log("on port " + PORT);
  }
});

app.use(cors());
// app.use(logMiddleware);

//CORS middleware
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

//body-parser built in express middleware
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: false }));

app.use(allowCrossDomain);

//for deployment on hosting and build
app.use(express.static(path.join(__dirname, "dist")));
app.use("/images", express.static(path.join(__dirname, "./images")));
app.use("/uploads", express.static(path.join(__dirname, "../uploads/files")));
//api routes
//app.use('/customer', customer);
app.use("/authentication", authentication);
app.use("/users", users);
app.use("/fileupload", file);
app.use("/department", department);
app.use("/objectives", objectives);
app.use("/goals", goals);
app.use("/campus", campus);
app.use("/logs", log);
app.use("/ai", ai);
app.use("/userhistory", userhistory);
app.use("/goallists", goallists);
app.use("/director_query", director_query);
app.use("/office_head_query", office_head_query_query);
app.use("/vice_president_query", vice_president_query);
app.use("/remark", remarks);
app.use("/notification", notifications);
app.use(
  "/profile_pic",
  express.static(path.join(__dirname, "../uploads/images"))
);

//deploy to vercel using prod files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const servers = app.listen(PORT, () => {
  console.log("Connected on port " + PORT);
});
