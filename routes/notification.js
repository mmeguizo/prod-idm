const Notification = require("../models/notifications");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Users = require("../models/user");

module.exports = (router) => {
  router.get("/notifications", async (req, res) => {
    // const userId = req.user._id; // Assuming you have user ID in req.user
    try {
      const notifications = await Notification.find({ userId }).sort({
        createdAt: -1,
      });
      res.status(200).json(notifications);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching notifications" });
    }
  });
  router.get("/getAllnotifications", async (req, res) => {
    console.log(req.decoded);

    const role = req.decoded.role;
    const userId = req.decoded._id; // Assuming you have user ID in req.user

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    try {
      // Check if the user is an admin or a super admin

      const notifications = await Notification.find({
        $or: [
          { isRead: false },
          { isRead: true, createdAt: { $gte: oneWeekAgo } },
        ],
      }).sort({
        isRead: -1,
      });
      res.status(200).json(notifications);

    //   if (role === "admin") {
    //     // Fetch all notifications
    //     const notifications = await Notification.find({
    //       $or: [
    //         { isRead: false },
    //         { isRead: true, createdAt: { $gte: oneWeekAgo } },
    //       ],
    //     }).sort({
    //       isRead: -1,
    //     });
    //     res.status(200).json(notifications);
    //   } else {
    //     // Fetch notifications for the specific user
    //     const notifications = await Notification.find({
    //       userId: userId,
    //       $or: [
    //         { isRead: false },
    //         { isRead: true, createdAt: { $gte: oneWeekAgo } },
    //       ],
    //     }).sort({
    //       isRead: -1,
    //     });
    //     res.status(200).json(notifications);
    //   }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching notifications" });
    }
  });

  router.get("/getNotificationsByRole", async (req, res) => {
    const { role, id } = req.decoded;

    try {
      let userIds = [];
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      if (role === "admin") {
        // Admin can fetch all notifications without filtering by user IDs
        const notifications = await Notification.aggregate([
          {
            $match: {
              // Remove the date restriction to get all notifications
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "reciepient",
              foreignField: "id",
              as: "to",
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "id",
              as: "from",
            },
          },
          {
            $unwind: {
              path: "$to",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $unwind: {
              path: "$from",
              preserveNullAndEmptyArrays: true,
            },
          },
          // {
          //   $addFields: {
          //     user: {
          //       name: "$userDetails.username",
          //       department: "$userDetails.department",
          //       role: "$userDetails.role",
          //     },
          //   },
          // },
          // {
          //   $project: {
          //     // userDetails: 0, // Exclude the userDetails field from the final output
          //   },
          // },
        ]).sort({ createdAt: -1 });

        return res.status(200).json({ success: true, notifications });
      } else if (role === "vice-president") {
        const usersUnderThisVP = await Users.find({
          vice_president_id: id,
        }).select({ id: true });
        userIds = usersUnderThisVP.map((user) => user.id);
        userIds.push(id); // Include the VP's own ID
      } else if (role === "director") {
        const usersUnderThisDirector = await Users.find({
          director_id: id,
        }).select({ id: true });
        userIds = usersUnderThisDirector.map((user) => user.id);
        userIds.push(id); // Include the Director's own ID
      } else if (role === "office-head") {
        userIds.push(id); // Only the Office Head's own ID
      } else {
        return res.status(400).json({ success: false, message: "Invalid role" });
      }

      // Different matching conditions based on role
      let matchCondition;
      
      if (role === "office-head") {
        // Office heads only see notifications where they are directly involved
        matchCondition = {
          $or: [
            // Notifications where they are the direct recipient
            { reciepient: id },
            // Notifications they created
            { userId: id }
          ]
        };
      } else {
        // VPs and Directors see notifications for themselves and their subordinates
        matchCondition = {
          $or: [
            // Notifications where the user is the creator
            { userId: id },
            // Notifications where the user is the recipient
            { reciepient: id },
            // Notifications created by users under this person's supervision
            { userId: { $in: userIds } },
            // Notifications where users under supervision are recipients
            { reciepient: { $in: userIds } }
          ]
        };
      }
      const notifications = await Notification.aggregate([
        {
          $match: matchCondition
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "id",
            as: "from",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "reciepient",
            foreignField: "id",
            as: "to",
          },
        },
        {
          $unwind: {
            path: "$to",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: "$from",
            preserveNullAndEmptyArrays: true,
          },
        },
        // {
        //   $addFields: {
        //     from: {
        //       name: "$from.username",
        //       department: "$from.department",
        //       role: "$from.role",
        //       profile_pic: "$from.profile_pic"
        //     },
        //     to: {
        //       $cond: {
        //         if: { $gt: [{ $size: "$to" }, 0] },
        //         then: {
        //           name: { $arrayElemAt: ["$to.username", 0] },
        //           department: { $arrayElemAt: ["$to.department", 0] },
        //           role: { $arrayElemAt: ["$to.role", 0] },
        //           profile_pic: { $arrayElemAt: ["$to.profile_pic", 0] }
        //         },
        //         else: null
        //       }
        //     }
        //   },
        // },
        // {
        //   $project: {
        //     _id: 1,
        //     userId: 1,
        //     message: 1,
        //     type: 1,
        //     isRead: 1,
        //     createdAt: 1,
        //     metadata: 1,
        //     from: 1,
        //     to: 1
        //   },
        // },
      ]).sort({ createdAt: -1, isRead: 1 });

      res.status(200).json({ success: true, notifications });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error fetching notifications" });
    }
  });

  router.put("/updateNotification/:id", async (req, res) => {
    const notificationId = req.params.id;

    try {
      const updatedNotification = await Notification.findByIdAndUpdate(
        notificationId,
        { isRead: true },
        { new: true } // Return the updated document
      );

      if (!updatedNotification) {
        return res.status(404).json({ success: false, message: "Notification not found" });
      }

      res.status(200).json({ success: true, notification: updatedNotification });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error updating notification" });
    }
  });

  return router;
};
