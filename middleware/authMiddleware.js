// // const jwt = require("jsonwebtoken");
// const config = require("../config/database");

// // const verifyToken = (req, res, next) => {
// //   //   const token = req.header("Authorization")?.split(" ")[1]; // Assuming token is in the Authorization header
// //   const token = req.header("Authorization"); // Assuming token is in the Authorization header
// //   if (!token)
// //     return res
// //       .status(401)
// //       .json({ message: "Access Denied. No token provided." });

// //   try {
// //     const verified = jwt.verify(token, config.secret); // Replace with your secret key
// //     req.user = verified;
// //     next(); // Move to the next middleware or route handler
// //   } catch (err) {
// //     if (err.name === "TokenExpiredError") {
// //       return res.status(401).json({ message: "Token has expired." });
// //     }
// //     return res.status(400).json({ message: "Invalid token." });
// //   }
// // };

// // module.exports = verifyToken;

// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const token = req.headers["authorization"]; // Assuming token is in the Authorization header
//   if (!token)
//     return res
//       .status(401)
//       .json({ message: "Access Denied. No token provided autMiddleware." });

//   try {
//     // const verified = jwt.verify(token, config.secret); // Replace with your secret key

//     const verified = jwt.verify(token, config.secret, (err, decoded) => {
//       if (err) {
//         // Handle expired or invalid token
//         if (err.name === "TokenExpiredError") {
//           return res.status(401).json({
//             success: false,
//             message: "Token has expired. Please log in again.",
//           });
//         } else if (err.name === "JsonWebTokenError") {
//           return res.status(400).json({
//             success: false,
//             message: "Token is invalid: " + err.message,
//           });
//         } else {
//           return res
//             .status(500)
//             .json({ success: false, message: "Internal server error Or Token Expired." });
//         }
//       } else {
//         // Assign the decoded token to request headers
//         req.decoded = decoded;
//         // req.user = verified;
//         next(); // Proceed to the next middleware or route handler
//       }
//     });

//     // req.user = verified;
//     // next(); // Move to the next middleware or route handler
//   } catch (err) {
//     if (err.name === "TokenExpiredError") {
//       // Handle expired token
//       return res
//         .status(401)
//         .json({ message: "Token has expired. Please log in again." });
//     } else if (err.name === "JsonWebTokenError") {
//       // Handle other JWT errors (e.g., invalid token)
//       return res.status(400).json({ message: "Invalid token." });
//     } else {
//       // Handle other errors
//       return res.status(500).json({ message: "Internal server error Or Token Expired." });
//     }
//   }
// };

// module.exports = verifyToken;
