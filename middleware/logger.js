// const winston = require("winston");
// require("winston-mongodb");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");
// const config = require("../config/database");

// const logs = require("../models/logs");

// // Logger configuration
// const logger = winston.createLogger({
//   level: "info",
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.MongoDB({
//       db: process.env.DB_URL,
//       collection: "logHistory",
//       options: { useUnifiedTopology: true },
//       storeHost: true,
//     }),
//   ],
// });

// // Logging middleware
// async function logMiddleware(data) {
//   if (data) {
//     await logs.create(data);
//   }
// }

// module.exports = { logger, logMiddleware };
