const Logs = require("../models/logs");

module.exports = (router) => {
  router.get("/getAllLogs/:id", async (req, res) => {
    let data = [];
    try {
      //   let logs = await Logs.find({ method: { $ne: "GET" } }).sort({
      //     createdAt: -1,
      //   });

      let logs = await Logs.aggregate([
        {
          $match: {
            method: {
              $ne: "GET",
            },
            deleted: false,
          },
        },
        // {
        //   $lookup: {
        //     as: "goals",
        //     from: "goals",
        //     foreignField: "_id",
        //     localField: "body._id",
        //   },
        // },
        // {
        //   $lookup: {
        //     as: "objectives",
        //     from: "objectives",
        //     foreignField: "id",
        //     localField: "body.id",
        //   },
        // },
        // {
        //   $lookup: {
        //     as: "ParamsObjectives",
        //     from: "objectives",
        //     foreignField: "id",
        //     localField: "params.objective_id",
        //   },
        // },
        {
          $sort: {
            createdAt: -1,
          },
        },
      ]);

      logs = logs.map((e) => {
        let pathSegments = e.url.split("/");
        return {
          ...e,
          resource: pathSegments[1] === "fileupload" ? "file" : pathSegments[1], // "goals"
          actionTaken: pathSegments[2], //deleteGoals
          actionMade: removeWord(pathSegments[2], pathSegments[1]),
        };
      });

      data.push(logs);
      await res.json({
        success: true,
        data: data,
      });
    } catch (error) {
      res.json({ success: false, message: error });
    }
  });

  return router;
  // pathSegments[2] = text
  // pathSegments[1] = wordToRemove
  function removeWord(text, wordToRemove) {
    if (text === "updateobjectivecompletion") {
      return "changed status of";
    }

    if (text === "addMultipleFiles") {
      text = "added";
    }
    if (text === "setInactiveObjectives") {
      text = "deleted";
    }
    if (text === "deleteFileObjective") {
      text = "deleted";
    }

    const regex = new RegExp(wordToRemove, "gi"); // 'g' for global, 'i' for case-insensitive
    return text.replace(regex, "");
  }
};
