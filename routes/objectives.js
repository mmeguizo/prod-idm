const Objectives = require("../models/objective");
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const Goals = require("../models/goals");
const Files = require("../models/fileupload");
// const { logger } = require("../middleware/logger");
const objective = require("../models/objective");
// const { log } = require("winston");
const Notifications = require("../models/notifications");

module.exports = (router) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(amount);
  };

  router.get("/getObjectiveForCalendar", (req, res) => {
    Objectives.aggregate([
      { $match: { deleted: false } },
      {
        $lookup: {
          as: "goals",
          from: "goals",
          foreignField: "_id",
          localField: "goal_Id",
        },
      },
      { $unwind: { path: "$goals", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          as: "users",
          from: "users",
          foreignField: "id",
          localField: "createdBy",
        },
      },
      { $unwind: { path: "$users", preserveNullAndEmptyArrays: true } },
      {
        $project: {
          id: 1,
          "goals.goals": 1,
          timetable: 1,
          "users.username": 1,
          "users.profile_pic": 1,
          "users.department": 1,
        },
      },
    ])
      .sort({ createdAt: -1 })
      .then((objectives) => {
        // Success
        res.status(200).json({
          success: true,
          data: objectives,
        });
      })
      .catch((err) => {
        // Error handling
        console.error("Error fetching objectives with goals and users:", err);
        res
          .status(500)
          .json({ error: "Internal server error Or Token Expired" });
      });
  });

  router.get(
    "/getAllByIdObjectivesWithGoalsAndUsers",

    (req, res) => {
      Objectives.aggregate([
        { $match: { deleted: false } },
        {
          $lookup: {
            as: "goals",
            from: "goals",
            foreignField: "_id",
            localField: "goal_Id",
          },
        },
        { $unwind: { path: "$goals", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            as: "users",
            from: "users",
            foreignField: "id",
            localField: "createdBy",
          },
        },
        { $unwind: { path: "$users", preserveNullAndEmptyArrays: true } },
        {
          $project: {
            "goals.objectives": 0,
            "goals.objectiveBudget": 0,
          },
        },
      ])
        .sort({ createdAt: -1 })
        .then((objectives) => {
          // Success
          res.status(200).json({
            success: true,
            data: objectives,
          });
        })
        .catch((err) => {
          // Error handling
          console.error("Error fetching objectives with goals and users:", err);
          res
            .status(500)
            .json({ error: "Internal server error Or Token Expired" });
        });
    }
  );

  router.get("/getAllObjectivesBudget", async (req, res) => {
    try {
      let objectives = await Objectives.aggregate([
        {
          $match: {
            deleted: false,
          },
        },
        {
          $group: {
            _id: null,
            totalObjectiveBudget: {
              $sum: "$budget",
            },
          },
        },
      ]);

      if (objectives.length > 0) {
        res.json({
          success: true,
          data: objectives[0].totalObjectiveBudget,
        });
      } else {
        res.json({
          success: true,
          data: 0,
        });
      }
    } catch (err) {
      res.json({ success: false, message: err });
    }
  });

  router.get("/getAllObjectivesForDashboard", async (req, res) => {
    let data = [];
    try {
      let objectivesCount = await Objectives.countDocuments({ deleted: false });
      let objectiveCompleted = await Objectives.countDocuments({
        complete: true,
        deleted: false,
      });
      let objectiveUncompleted = await Objectives.countDocuments({
        complete: false,
        deleted: false,
      });
      let objectivesData = await Objectives.find({ deleted: false }).select({
        _id: 0,
        id: 1,
        complete: 1,
        date_added: 1,
      });
      data.push({
        objectivesCount: objectivesCount,
        objectiveCompleted: objectiveCompleted,
        objectiveUncompleted: objectiveUncompleted,
        objectivesData: objectivesData,
      });
      res.json({ success: true, data: data });
    } catch (error) {
      res.json({ success: false, message: error });
    }
  });

  router.put("/updateobjectivecompletion", (req, res) => {
    let data = req.body;
    Objectives.findOne(
      {
        id: data.id,
      },
      (err, ObjectivesResults) => {
        if (err) throw err;
        Objectives.findOneAndUpdate(
          { id: data.id },
          { complete: !ObjectivesResults.complete },
          { upsert: true, select: "-__v" },
          (err, response) => {
            if (err) return res.json({ success: false, message: err.message });
            if (response) {
              // Add notification
              // Notifications.create({
              //   userId: req.decoded.id,
              //   message: `Objective ${
              //     newStatus ? "completed" : "uncompleted"
              //   }: ${ObjectivesResults.functional_objective}`,
              //   type: newStatus
              //     ? "objective_completed"
              //     : "objective_uncompleted",
              //   createdAt: new Date(),
              //   metadata: response,
              // });

              res.json({
                success: true,
                message: " Successfully Changed",
                data: response,
              });
            } else {
              res.json({
                success: false,
                message: "Error Occured",
              });
            }
          }
        );
      }
    );
  });

  router.get("/getAllByIdObjectives/:id", async (req, res) => {
    try {
      await Objectives.aggregate(
        [
          {
            $match: {
              goalId: req.params.id,
              deleted: false,
            },
          },
          {
            $lookup: {
              as: "remarks",
              from: "remarks",
              foreignField: "objectiveId",
              localField: "id",
            },
          },
        ],
        async (error, results) => {
          if (error) {
            console.log({ ERR: error });
            return res
              .status(500)
              .json({ success: false, message: error.message });
          }
          if (!results || results.length === 0) {
            return res.json({
              success: false,
              message: "No Objectives found.",
              Objectives: [],
            });
          }
          if (results) {
            return res.status(200).json({
              success: true,
              Objectives: await calculatePercentage(results),
            });
          }
        }
      );
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  });

  router.get("/getObjectiveById/:id", async (req, res) => {
    try {
      const objective = await Objectives.findOne({ id: req.params.id });

      if (!objective) {
        return res.json({
          success: false,
          message: "Objective not found.",
        });
      }

      res.json({
        success: true,
        data: objective,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Internal server error Or Token Expired",
      });
    }
  });

  async function calculatePercentage(objectives) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentQuarter = Math.floor(currentMonth / 3);
    const currentYear = currentDate.getFullYear();

    return await objectives.map((objective) => {
      let total = 0;
      let totalCumulativeAchive = 0;
      let totalCumulativeAchiveGoal = 0;
      let totalGoalsSet = 0;
      let goal = 0;
      const target = objective.target;
      let actual = 0;
      let monthPointer = 0;
      let monthPointerValue = 0;
      const updatedObjective = { ...objective };
      updatedObjective.monthPointerValue = {};
      // const updatedObjective = { ...objective._doc };
      // Copy to prevent mutating the original

      if (objective.frequency_monitoring === "monthly") {
        for (let i = 0; i < 12; i++) {
          total += objective[`month_${i}`] || 0;

          if (
            objective.type_of_computation === "non-cumulative" &&
            objective[`month_${i}_date`] &&
            objective[`month_${i}`] !== 0
          ) {
            const monthDate = new Date(objective[`month_${i}_date`]);
            const monthDateSet = monthDate.getMonth();
            updatedObjective.monthPointer = monthDateSet;
            updatedObjective.monthPointerValue[`monthPointer_${monthDateSet}`] =
              objective[`month_${i}`] || 0;
          }

          if (objective.type_of_computation === "cumulative") {
            if (
              objective[`goal_month_${i}`] &&
              objective.type_of_computation === "cumulative"
            ) {
              totalGoalsSet += objective[`goal_month_${i}`] || 0;
            }

            if (
              objective.type_of_computation === "cumulative" &&
              objective[`month_${i}_date`] &&
              objective[`month_${i}`] !== 0
            ) {
              let goalmonthposition = 0;
              let currentmonthposition = 0;

              const monthDate = new Date(objective[`month_${i}_date`]);
              const monthDateSet = monthDate.getMonth();
              updatedObjective.monthPointer = monthDateSet;
              updatedObjective.monthPointerValue[
                `monthPointer_${monthDateSet}`
              ] = objective[`month_${i}`] || 0;

              if (monthDateSet === currentMonth) {
                goalmonthposition = 0;
              } else if (monthDateSet === currentMonth - 1) {
                goalmonthposition = 1;
              } else if (monthDateSet === currentMonth - 2) {
                goalmonthposition = 2;
              } else if (monthDateSet === currentMonth - 3) {
                goalmonthposition = 3;
              } else if (monthDateSet === currentMonth - 4) {
                goalmonthposition = 4;
              } else if (monthDateSet === currentMonth - 5) {
                goalmonthposition = 5;
              } else if (monthDateSet === currentMonth - 6) {
                goalmonthposition = 6;
              } else if (monthDateSet === currentMonth - 7) {
                goalmonthposition = 7;
              } else if (monthDateSet === currentMonth - 8) {
                goalmonthposition = 8;
              } else if (monthDateSet === currentMonth - 9) {
                goalmonthposition = 9;
              } else if (monthDateSet === currentMonth - 10) {
                goalmonthposition = 10;
              } else if (monthDateSet === currentMonth - 11) {
                goalmonthposition = 11;
              } else if (monthDateSet === currentMonth - 12) {
                goalmonthposition = 12;
              }

              let currentMonthDateSet = currentDate.getMonth();

              if (currentMonthDateSet === currentMonth) {
                currentmonthposition = 0;
              } else if (currentMonthDateSet === currentMonth - 1) {
                currentmonthposition = 1;
              } else if (currentMonthDateSet === currentMonth - 2) {
                currentmonthposition = 2;
              } else if (currentMonthDateSet === currentMonth - 3) {
                currentmonthposition = 3;
              } else if (currentMonthDateSet === currentMonth - 4) {
                currentmonthposition = 4;
              } else if (currentMonthDateSet === currentMonth - 5) {
                currentmonthposition = 5;
              } else if (currentMonthDateSet === currentMonth - 6) {
                currentmonthposition = 6;
              } else if (currentMonthDateSet === currentMonth - 7) {
                currentmonthposition = 7;
              } else if (currentMonthDateSet === currentMonth - 8) {
                currentmonthposition = 8;
              } else if (currentMonthDateSet === currentMonth - 9) {
                currentmonthposition = 9;
              } else if (currentMonthDateSet === currentMonth - 10) {
                currentmonthposition = 10;
              } else if (currentMonthDateSet === currentMonth - 11) {
                currentmonthposition = 11;
              } else if (currentMonthDateSet === currentMonth - 12) {
                currentmonthposition = 12;
              }

              if (
                goalmonthposition === currentMonthDateSet &&
                monthDate.getFullYear() === currentYear
              ) {
                totalCumulativeAchive += objective[`month_${i}`] || 0;
                totalCumulativeAchiveGoal += objective[`goal_month_${i}`] || 0;
              }
            }
          }
        }
      } else if (objective.frequency_monitoring === "quarterly") {
        for (let i = 0; i < 4; i++) {
          total += objective[`quarter_${i}`] || 0;

          if (
            objective.type_of_computation === "non-cumulative" &&
            objective[`quarter_${i}_date`] &&
            objective[`quarter_${i}`] !== 0
          ) {
            const quarterDate = new Date(objective[`quarter_${i}_date`]);
            const quarterDateSet = quarterDate.getMonth();

            // monthPointer = quarterDateSet;
            // monthPointerValue = objective[`quarter_${i}`] || 0;

            updatedObjective.monthPointer = quarterDateSet;

            updatedObjective.monthPointerValue[
              `monthPointer_${quarterDateSet}`
            ] = objective[`quarter_${i}`] || 0;
          }

          if (objective.type_of_computation === "cumulative") {
            if (
              objective[`goal_quarter_${i}`] &&
              objective.type_of_computation === "cumulative"
            ) {
              totalGoalsSet += objective[`goal_quarter_${i}`] || 0;
            }

            if (
              objective.type_of_computation === "cumulative" &&
              objective[`quarter_${i}_date`] &&
              objective[`quarter_${i}`] !== 0
            ) {
              let goalquarterposition = 0;
              let currentquarterposition = 0;
              const quarterDate = new Date(objective[`quarter_${i}_date`]);
              const quarterDateSet = quarterDate.getMonth();

              // monthPointer = quarterDateSet;
              // monthPointerValue = objective[`quarter_${i}`] || 0;

              updatedObjective.monthPointer = quarterDateSet;

              updatedObjective.monthPointerValue[
                `monthPointer_${quarterDateSet}`
              ] = objective[`quarter_${i}`] || 0;

              if (quarterDateSet >= 0 && quarterDateSet <= 2) {
                goalquarterposition = 0;
              } else if (quarterDateSet >= 3 && quarterDateSet <= 5) {
                goalquarterposition = 1;
              } else if (quarterDateSet >= 6 && quarterDateSet <= 8) {
                quarter = 2;
              } else if (quarterDateSet >= 9 && quarterDateSet <= 11) {
                goalquarterposition = 3;
              }

              const currentYearDateSet = currentDate.getMonth();

              if (currentYearDateSet >= 0 && currentYearDateSet <= 2) {
                currentquarterposition = 0;
              } else if (currentYearDateSet >= 3 && currentYearDateSet <= 5) {
                currentquarterposition = 1;
              } else if (currentYearDateSet >= 6 && currentYearDateSet <= 8) {
                currentquarterposition = 2;
              } else if (currentYearDateSet >= 9 && currentYearDateSet <= 11) {
                currentquarterposition = 3;
              }

              if (
                goalquarterposition === currentquarterposition &&
                quarterDate.getFullYear() === currentYear
              ) {
                // actual += objective[`quarter_${i}`] || 0;
                totalCumulativeAchive += objective[`quarter_${i}`] || 0;
                totalCumulativeAchiveGoal +=
                  objective[`goal_quarter_${i}`] || 0;
              }
            }
          }
        }
      } else if (objective.frequency_monitoring === "semi_annual") {
        for (let i = 0; i < 2; i++) {
          total += objective[`semi_annual_${i}`] || 0;

          if (
            objective.type_of_computation === "non-cumulative" &&
            objective[`semi_annual_${i}_date`] &&
            objective[`semi_annual_${i}`] !== 0
          ) {
            const semiAnnualDate = new Date(objective[`semi_annual_${i}_date`]);
            const semiAnnualDateSet = semiAnnualDate.getMonth();

            monthPointer = semiAnnualDateSet;
            monthPointerValue = objective[`semi_annual_${i}`] || 0;

            updatedObjective.monthPointer = semiAnnualDateSet;

            updatedObjective.monthPointerValue[
              `monthPointer_${semiAnnualDateSet}`
            ] = objective[`semi_annual_${i}`] || 0;
          }

          if (objective.type_of_computation === "cumulative") {
            if (
              objective[`goal_semi_annual_${i}`] &&
              objective.type_of_computation === "cumulative"
            ) {
              totalGoalsSet += objective[`goal_semi_annual_${i}`] || 0;
            }

            if (
              objective.type_of_computation === "cumulative" &&
              objective[`semi_annual_${i}_date`] &&
              objective[`semi_annual_${i}`] !== 0
            ) {
              let goalsemiannualposition = 0;
              let currentsemianualposition = 0;

              const semiAnnualDate = new Date(
                objective[`semi_annual_${i}_date`]
              );
              const semiAnnualDateSet = semiAnnualDate.getMonth();

              monthPointer = semiAnnualDateSet;
              monthPointerValue = objective[`semi_annual_${i}`] || 0;

              updatedObjective.monthPointer = semiAnnualDateSet;

              updatedObjective.monthPointerValue[
                `monthPointer_${semiAnnualDateSet}`
              ] = objective[`semi_annual_${i}`] || 0;

              if (semiAnnualDateSet >= 0 && semiAnnualDateSet <= 5) {
                goalsemiannualposition = 0;
              } else {
                goalsemiannualposition = 1;
              }

              const currentYearDateSet = currentDate.getMonth();

              if (currentYearDateSet >= 0 && currentYearDateSet <= 5) {
                currentsemianualposition = 0;
              } else {
                currentsemianualposition = 1;
              }

              if (
                goalsemiannualposition === currentsemianualposition &&
                semiAnnualDate.getFullYear() === currentYear
              ) {
                // actual += objective[`semi_annual_${i}`] || 0;
                totalCumulativeAchive += objective[`semi_annual_${i}`] || 0;
                totalCumulativeAchiveGoal +=
                  objective[`goal_semi_annual_${i}`] || 0;
              }
            }
          }
        }
      } else if (objective.frequency_monitoring === "yearly") {
        for (let i = 0; i < 1; i++) {
          total += objective[`yearly_${i}`] || 0;

          if (
            objective.type_of_computation === "non-cumulative" &&
            objective[`yearly_${i}_date`] &&
            objective[`yearly_${i}`] !== 0
          ) {
            const yearlyDate = new Date(objective[`yearly_${i}_date`]);

            let montpointer = yearlyDate.getMonth();
            // monthPointerValue = objective[`yearly_${i}`] || 0;

            updatedObjective.monthPointer = montpointer;

            updatedObjective.monthPointerValue[`monthPointer_${montpointer}`] =
              objective[`yearly_${i}`] || 0;
          }

          if (objective.type_of_computation === "cumulative") {
            if (
              objective[`goal_yearly_${i}`] &&
              objective.type_of_computation === "cumulative"
            ) {
              totalGoalsSet += objective[`goal_yearly_${i}`] || 0;
            }

            if (
              objective.type_of_computation === "cumulative" &&
              objective[`yearly_${i}_date`]
            ) {
              let goalyearposition = 0;
              let currentyearposition = 0;

              const yearlyDate = new Date(objective[`yearly_${i}_date`]);

              let montpointer = yearlyDate.getMonth();
              // monthPointerValue = objective[`yearly_${i}`] || 0;

              updatedObjective.monthPointer = montpointer;

              updatedObjective.monthPointerValue[
                `monthPointer_${montpointer}`
              ] = objective[`yearly_${i}`] || 0;

              if (yearlyDate.getFullYear() === currentYear) {
                // actual += objective[`yearly_0`] || 0;
                totalCumulativeAchive += objective[`yearly_${i}`] || 0;
                totalCumulativeAchiveGoal += objective[`goal_yearly_${i}`] || 0;
              }
            }
          }
        }
      }

      updatedObjective.total = total;
      // updatedObjective.actual = actual;
      updatedObjective.totalCumulativeAchive = totalCumulativeAchive;
      updatedObjective.totalCumulativeAchiveGoal = totalCumulativeAchiveGoal;
      updatedObjective.completionPercentage = target
        ? Math.round((total / target) * 100)
        : 0;
      // updatedObjective.monthPointer = monthPointer;
      // updatedObjective.monthPointerValue = monthPointerValue;
      updatedObjective.GOAL = totalCumulativeAchive;
      updatedObjective.ACTUAL = totalCumulativeAchiveGoal;
      updatedObjective.GOALSET = totalGoalsSet;
      updatedObjective.countNonCumulative = `${total}` + "/" + `${target}`;
      updatedObjective.goalVsActual = `${totalCumulativeAchive}/${
        totalCumulativeAchiveGoal || totalGoalsSet
      } `;
      return updatedObjective;

      //objectiveData.total + "/" + objectiveData.target
    });
  }

  router.get("/getAllObjectives", (req, res) => {
    Objectives.find({ deleted: false }, (err, Objectives) => {
      if (err) {
        return res.status(500).json({ success: false, message: err });
      }

      if (!Objectives || Objectives.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No Objectives found.",
          Objectives: [],
        });
      }
      return res.status(200).json({ success: true, Objectives });
    }).sort({ _id: -1 });
  });

  router.post("/findObjectivesById", (req, res) => {
    Objectives.findOne(
      { id: req.body.id },
      "-deleted -__v",
      function (err, Objectives) {
        if (err) {
          res.json({ success: false, message: "Objectives not found" });
        } else {
          if (!Objectives) {
            res.json({ success: false, message: "No Objectives found." });
          } else {
            res.json({ success: true, Objectives: Objectives });
          }
        }
      }
    );
  });

  router.post("/addObjectives", async (req, res) => {
    const objectivesData = req.body;
    const { goalId, budget: objectiveBudget } = req.body;
    let goalBudget = 0;
    let totalSubGoalBudget = 0;
    let goalObjectiveNumber = [];

    try {
      console.log(objectivesData);

      const checkTargetVsGoal = await checkedGoalVStarget(objectivesData);

      if (!checkTargetVsGoal) {
        return res
          .status(400)
          .json({ message: "check goals vs target, there is a discrepancy" });
      }

      let goalData = await Goals.findOne({ id: goalId }).select({
        budget: 1,
        objectives: 1,
        objectiveBudget: 1,
      });

      totalSubGoalBudget = goalData.objectiveBudget
        .map((e) => e.budget)
        .reduce((a, b) => a + b, 0);

      goalBudget = goalData.budget;

      if (!objectivesData) {
        return res.status(400).json({ message: "Invalid data" });
      }

      if (!objectivesData.frequency_monitoring) {
        return res
          .status(400)
          .json({ message: "Frequency monitoring is required" });
      }

      if (objectiveBudget > goalBudget - totalSubGoalBudget) {
        return res.status(400).json({ message: "Budget exceeds limit" });
      }

      const ObjectivesDataRequest = {
        id: uuidv4(),
        ...objectivesData,
      };

      const newObjective = new Objectives(ObjectivesDataRequest);
      let results = await newObjective.save();

      if (results) {
        await Goals.findOneAndUpdate(
          { id: goalId },
          {
            $push: {
              objectives: results.id,
              objectiveBudget: {
                id: results.id,
                budget: objectiveBudget,
              },
            },
          }
        );

        // await Notifications.create({
        //   userId: req.decoded.id,
        //   message: `New objective added: ${results.functional_objective}`,
        //   type: "objective_added",
        //   createdAt: new Date(),
        //   metadata: results,
        // });
      }

      res.status(201).json({ success: true, data: newObjective });
    } catch (error) {
      // logger.error(error);
      console.log(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  });

  async function checkedGoalVStarget(data) {
    let counter = 0;

    if (data.frequency_monitoring === "monthly") {
      for (let i = 0; i < 12; i++) {
        counter += data[`goal_month_${i}`] || 0;
      }
    }

    if (data.frequency_monitoring === "yearly") {
      counter = data["goal_yearly_0"];
    }

    if (data.frequency_monitoring === "semi_annual") {
      counter = data["goal_semi_annual_0"] + data["goal_semi_annual_1"];
    }

    if (data.frequency_monitoring === "quarterly") {
      counter =
        data["goal_quarter_0"] +
        data["goal_quarter_1"] +
        data["goal_quarter_2"] +
        data["goal_quarter_3"];
    }
    return counter === data.target ? true : false;
  }

  router.put("/deleteObjectives", (req, res) => {
    let data = req.body;

    Objectives.deleteOne(
      {
        id: data.id,
      },
      (err, results) => {
        if (err) {
          res.json({
            success: false,
            message: "Could not Delete Objectives" + err,
          });
        } else {
          res.json({
            success: true,
            message: " Successfully Deleted the Objectives",
            data: results,
          });
        }
      }
    );
  });

  router.put("/setInactiveObjectives", async (req, res) => {
    const data = req.body;

    try {
      // Find the objective
      const objective = await Objectives.findOne({ id: data.id });
      if (!objective) {
        return res.json({ success: false, message: "Objective not found" });
      }

      // Update the objective
      const updatedObjective = await Objectives.findOneAndUpdate(
        { id: data.id },
        { deleted: true, status: "inactive" },
        { new: true, upsert: true, select: "-__v" } // Use { new: true } to return the updated document
      );

      if (updatedObjective) {
        await Goals.find({ objectives: { $in: [data.id] } })
          .then(async (goals) => {
            await Goals.updateMany(
              { objectives: { $in: [data.id] } }, // Find goals referencing the objective
              {
                $pull: {
                  objectives: data.id, // Remove from objectives array
                  objectiveBudget: { id: data.id }, // Remove from objectiveBudget array
                },
              }
            );
          })
          .catch((err) => {
            console.error("Error finding goals:", err);
          });

        // await Notifications.create({
        //   userId: req.decoded.id,
        //   message: `Objective deactivated: ${objective.functional_objective}`,
        //   type: "objective_deactivated",
        //   createdAt: new Date(),
        //   metadata: updatedObjective,
        // });
      } else {
        return res.json({
          success: false,
          message: "Could not update objective",
        });
      }

      // Update the files
      const updateFilesResult = await Files.updateMany(
        { for: "files", status: true, objective_id: data.id },
        { $set: { status: false } }
      );

      if (updateFilesResult.acknowledged) {
        return res.json({
          success: true,
          message: "Successfully deleted objectives including its files...",
          data: updatedObjective,
        });
      } else {
        return res.json({
          success: false,
          message: "Nothing were updated",
        });
      }
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  });

  router.put("/changeObjectivesStatus", (req, res) => {
    let data = req.body;
    Objectives.findOne(
      {
        id: data.id,
      },
      (err, Objectives) => {
        if (err) throw err;
        Objectives.findOneAndUpdate(
          { id: data.id },
          { status: Objectives.status === "active" ? "inactive" : "active" },
          { upsert: true, select: "-__v" },
          (err, response) => {
            if (err) return res.json({ success: false, message: err.message });
            if (response) {
              res.json({
                success: false,
                message: response,
              });
            } else {
              res.json({
                success: true,
                message: " Successfully Objectives set Status",
                data: response,
              });
            }
          }
        );
      }
    );
  });

  router.put("/updateObjectives", async (req, res) => {
    const { id, ...updateData } = req.body;

    try {
      // Find the objective using the id
      const objective = await Objectives.findOne({ id });
      if (!objective) {
        return res.status(404).json({
          success: false,
          message: "Objective not found",
        });
      }

      // Check the goal_month_[i] : value and total
      let isComplete = true;
      if (objective.frequency_monitoring === "monthly") {
        for (let i = 0; i < 12; i++) {
          const key = `month_${i}`;
          const goalKey = `goal_month_${i}`;
          if (objective[goalKey] !== updateData[key]) {
            isComplete = false;
            break;
          }
        }
      } else if (objective.frequency_monitoring === "quarterly") {
        for (let i = 0; i < 4; i++) {
          const key = `quarter_${i}`;
          const goalKey = `goal_quarter_${i}`;
          if (objective[goalKey] !== updateData[key]) {
            isComplete = false;
            break;
          }
        }
      } else if (objective.frequency_monitoring === "semi_annual") {
        for (let i = 0; i < 2; i++) {
          const key = `semi_annual_${i}`;
          const goalKey = `goal_semi_annual_${i}`;
          if (objective[goalKey] !== updateData[key]) {
            isComplete = false;
            break;
          }
        }
      } else {
        const key = `yearly_0`;
        const goalKey = `goal_yearly_0`;
        if (objective[goalKey] !== updateData[key]) {
          isComplete = false;
        }
      }

      // If the same total, change the complete to true and add it to the update data

      updateData.complete = isComplete ? isComplete : false;

      const result = await Objectives.updateOne({ id }, updateData);
      if (result.nModified === 0) {
        return res.status(404).json({
          success: false,
          message: "Objective not found",
        });
      }

      // await Notifications.create({
      //   userId: req.decoded.id,
      //   message: `Objective updated: ${
      //     updateData.functional_objective || "Objective"
      //   }`,
      //   type: "objective_updated",
      //   createdAt: new Date(),
      //   metadata: { id, ...updateData },
      // });

      res.json({
        success: true,
        message: "Objective updated successfully",
        result,
        data: req.body,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  //**********************USer Routes ********************** */

  router.get("/getObjectiveForCalendar/:id", (req, res) => {
    Objectives.aggregate([
      { $match: { deleted: false, userId: req.params.id } },
      {
        $lookup: {
          as: "goals",
          from: "goals",
          foreignField: "_id",
          localField: "goal_Id",
        },
      },
      { $unwind: { path: "$goals", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          as: "users",
          from: "users",
          foreignField: "id",
          localField: "createdBy",
        },
      },
      { $unwind: { path: "$users", preserveNullAndEmptyArrays: true } },
      {
        $project: {
          "goals.objectives": 0,
          "goals.objectiveBudget": 0,
        },
      },
    ])
      .sort({ createdAt: -1 })
      .then((objectives) => {
        // Success
        res.status(200).json({
          success: true,
          data: objectives,
        });
      })
      .catch((err) => {
        // Error handling
        console.error("Error fetching objectives with goals and users:", err);
        res
          .status(500)
          .json({ error: "Internal server error Or Token Expired" });
      });
  });

  router.get(
    "/getAllObjectivesForDashboard/:id",

    async (req, res) => {
      let data = [];
      try {
        let objectivesCount = await Objectives.countDocuments({
          createdBy: req.params.id,
        });
        let objectiveCompleted = await Objectives.countDocuments({
          complete: true,
          deleted: false,
          createdBy: req.params.id,
        });
        let objectiveUncompleted = await Objectives.countDocuments({
          complete: false,
          deleted: false,
          createdBy: req.params.id,
        });
        let objectivesData = await Objectives.find({
          deleted: false,
          createdBy: req.params.id,
        }).select({
          _id: 0,
          id: 1,
          complete: 1,
          date_added: 1,
        });
        data.push({
          objectivesCount: objectivesCount,
          objectiveCompleted: objectiveCompleted,
          objectiveUncompleted: objectiveUncompleted,
          objectivesData: objectivesData,
        });
        res.json({ success: true, data: data });
      } catch (error) {
        res.json({ success: false, message: error });
      }
    }
  );

  router.get("/getAllByIdObjectives/:id/:userId", (req, res) => {
    Objectives.find(
      { deleted: false, goalId: req.params.id, createdBy: req.params.userId },
      (err, Objectives) => {
        if (err) {
          return res.status(500).json({ success: false, message: err });
        }

        if (!Objectives || Objectives.length === 0) {
          return res.json({
            success: false,
            message: "No Objectives found.",
            Objectives: [],
          });
        }
        return res.status(200).json({ success: true, Objectives });
      }
    ).sort({ _id: -1 });
  });

  router.get(
    "/getAllByIdObjectivesWithGoalsAndUsers/:id",

    (req, res) => {
      Objectives.aggregate([
        { $match: { deleted: false, createdBy: req.params.id } },
        {
          $lookup: {
            as: "goals",
            from: "goals",
            foreignField: "_id",
            localField: "goal_Id",
          },
        },
        { $unwind: { path: "$goals", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            as: "users",
            from: "users",
            foreignField: "id",
            localField: "createdBy",
          },
        },
        { $unwind: { path: "$users", preserveNullAndEmptyArrays: true } },
        {
          $project: {
            "goals.objectives": 0,
            "goals.objectiveBudget": 0,
          },
        },
      ])
        .sort({ createdAt: -1 })
        .then((objectives) => {
          // Success
          res.status(200).json({
            success: true,
            data: objectives,
          });
        })
        .catch((err) => {
          // Error handling
          console.error("Error fetching objectives with goals and users:", err);
          res
            .status(500)
            .json({ error: "Internal server error Or Token Expired" });
        });
    }
  );

  router.get("/getAllObjectives/:id", (req, res) => {
    Objectives.find(
      { deleted: false, createdBy: req.params.id },
      (err, Objectives) => {
        if (err) {
          return res.status(500).json({ success: false, message: err });
        }

        if (!Objectives || Objectives.length === 0) {
          return res.status(404).json({
            success: false,
            message: "No Objectives found.",
            Objectives: [],
          });
        }
        return res.status(200).json({ success: true, Objectives });
      }
    ).sort({ _id: -1 });
  });

  router.get(
    "/getAllObjectivesForDashboard/:id",

    async (req, res) => {
      let data = [];
      try {
        let objectivesCount = await Objectives.countDocuments({
          createdBy: req.params.id,
        });
        let objectiveCompleted = await Objectives.countDocuments({
          complete: true,
          deleted: false,
          createdBy: req.params.id,
        });
        let objectiveUncompleted = await Objectives.countDocuments({
          complete: false,
          deleted: false,
          createdBy: req.params.id,
        });
        let objectivesData = await Objectives.find({
          deleted: false,
          createdBy: req.params.id,
        }).select({
          _id: 0,
          id: 1,
          complete: 1,
          date_added: 1,
        });
        data.push({
          objectivesCount: objectivesCount,
          objectiveCompleted: objectiveCompleted,
          objectiveUncompleted: objectiveUncompleted,
          objectivesData: objectivesData,
        });
        res.json({ success: true, data: data });
      } catch (error) {
        res.json({ success: false, message: error });
      }
    }
  );

  router.get(
    "/getAllObjectivesForDashboardPie/:id",

    async (req, res) => {
      try {
        // let objectivesCount = await Objectives.countDocuments({
        //   goalId: req.params.id,
        // });
        // let objectiveCompleted = await Objectives.countDocuments({
        //   complete: true,
        //   deleted: false,
        //   goalId: req.params.id,
        // });
        // let objectiveUncompleted = await Objectives.countDocuments({
        //   complete: false,
        //   deleted: false,
        //   goalId: req.params.id,
        // });
        let objectivesData = await Objectives.find({
          deleted: false,
          goalId: req.params.id,
        }).select({
          id: 1,
          functional_objective: 1,
          performance_indicator: 1,
          target: 1,
          formula: 1,
          programs: 1,
          responsible_persons: 1,
          // clients: 1,
          remarks: 1,
          month_0: 1,
          month_1: 1,
          month_2: 1,
          month_3: 1,
          month_4: 1,
          month_5: 1,
          month_6: 1,
          month_7: 1,
          month_8: 1,
          month_9: 1,
          month_10: 1,
          month_11: 1,
          file_month_0: 1,
          file_month_1: 1,
          file_month_2: 1,
          file_month_3: 1,
          file_month_4: 1,
          file_month_5: 1,
          file_month_6: 1,
          file_month_7: 1,
          file_month_8: 1,
          file_month_9: 1,
          file_month_10: 1,
          file_month_11: 1,
          goal_month_0: 1,
          goal_month_1: 1,
          goal_month_2: 1,
          goal_month_3: 1,
          goal_month_4: 1,
          goal_month_5: 1,
          goal_month_6: 1,
          goal_month_7: 1,
          goal_month_8: 1,
          goal_month_9: 1,
          goal_month_10: 1,
          goal_month_11: 1,
          quarter_0: 1,
          quarter_1: 1,
          quarter_2: 1,
          quarter_3: 1,
          file_quarter_0: 1,
          file_quarter_1: 1,
          file_quarter_2: 1,
          file_quarter_3: 1,
          goal_quarter_0: 1,
          goal_quarter_1: 1,
          goal_quarter_2: 1,
          goal_quarter_3: 1,
          semi_annual_0: 1,
          semi_annual_1: 1,
          file_semi_annual_0: 1,
          file_semi_annual_1: 1,
          goal_semi_annual_0: 1,
          goal_semi_annual_1: 1,

          goal_yearly_0: 1,
          file_yearly_0: 1,
          yearly_0: 1,

          frequency_monitoring: 1,
          timetable: 1,
          // complete: 1,
          data_source: 1,
          budget: 1,
          date_added: 1,
          createdBy: 1,
          updateby: 1,
          updateDate: 1,
          createdAt: 1,
          deleted: 1,
          strategic_objective: 1,
        });

        console.log({ objectivesData: objectivesData._doc });

        // let completionPercentage =
        //   objectivesCount > 0
        //     ? Math.round((objectiveCompleted / objectivesData.length) * 100)
        //     : 0;
        res.json({
          success: true,
          data: {
            objectivesData: await CalculateBudgetAndCompletion(objectivesData),
          },
        });
      } catch (error) {
        res.json({ success: false, message: error });
      }
    }
  );

  router.get("/getAllObjectivesBudget/:id", async (req, res) => {
    try {
      let objectives = await Objectives.aggregate([
        {
          $match: {
            deleted: false,
            createdBy: req.params.id,
          },
        },
        {
          $group: {
            _id: null,
            totalObjectiveBudget: {
              $sum: "$budget",
            },
          },
        },
      ]);

      if (objectives.length > 0) {
        res.json({
          success: true,
          data: objectives[0].totalObjectiveBudget,
        });
      } else {
        res.json({
          success: true,
          data: 0,
        });
      }
    } catch (err) {
      res.json({ success: false, message: err });
    }
  });
  async function CalculateBudgetAndCompletion(data) {
    return data.map((obj) => {
      let total = 0;

      if (obj.frequency_monitoring === "monthly") {
        for (let i = 0; i < 12; i++) {
          total += obj[`month_${i}`] || 0;
        }
      } else if (obj.frequency_monitoring === "quarterly") {
        for (let i = 0; i < 4; i++) {
          total += obj[`quarter_${i}`] || 0;
        }
      } else if (obj.frequency_monitoring === "semi_annual") {
        for (let i = 0; i < 2; i++) {
          total += obj[`semi_annual_${i}`] || 0;
        }
      } else if (obj.frequency_monitoring === "yearly") {
        total += obj[`yearly_0`] || 0;
      }

      return {
        ...obj._doc,
        completed: total === obj.target ? true : false,
      };
    });
  }

  return router;
};

/*
old code in updatating the objectis  5-09-24
 router.put("/updateObjectives", async (req, res) => {
    let { id, goalId, budget: objectiveBudget, ...ObjectivesData } = req.body;

    let goal = await Goals.findOne({
      id: goalId,
      deleted: false,
    }).select({
      id: 1,
      budget: 1,
      objectives: 1,
    });

    let { budget: goalBudget, objectives: goalObjectives } = goal;
    console.log(req.body);

    Objectives.findOneAndDelete({ id: id }, (err, existingDocument) => {
      if (err) return res.json({ success: false, message: err.message });

      if (existingDocument) {
        // Create a new object for insertion, ensuring all required fields are present
        const newDocumentData = {
          ...req.body,
          id: existingDocument.id, // Preserve the original id
          _id: existingDocument._id, // Preserve the original _id
          createdBy: req.body.createdBy || existingDocument.createdBy, // Ensure `createdBy` is set
          goal_Id: req.body.goal_Id || existingDocument.goal_Id, // Ensure `goal_Id` is set
        };

        // Log the data for debugging purposes
        // console.log("Existing Document:", existingDocument);
        // console.log("New Document Data:", newDocumentData);

        // Ensure all required fields are present before creating the new document
        if (!newDocumentData.createdBy || !newDocumentData.goal_Id) {
          return res.json({
            success: false,
            message:
              "`createdBy` and `goal_Id` are required fields and must be provided.",
          });
        }

        // Insert the new document with the updated data
        Objectives.create(newDocumentData, (err, newDocument) => {
          if (err) return res.json({ success: false, message: err.message });

          res.json({
            success: true,
            message: "Objectives Information has been completely replaced!",
            data: newDocument,
          });
        });
      } else {
        res.json({
          success: false,
          message: "Objective not found!",
        });
      }
    });

    // Objectives.findOneAndUpdate(
    //   { id: id }, // Match the document with the specified id
    //   { $set: { ...req.body, id: undefined, _id: undefined } }, // Update all fields except 'id' and '_id'
    //   { new: true }, // Return the modified document
    //   (err, response) => {
    //     if (err) return res.json({ success: false, message: err.message });

    //     if (response) {
    //       res.json({
    //         success: true,
    //         message: "Objectives Information has been updated!",
    //         data: response,
    //       });
    //     } else {
    //       res.json({
    //         success: true,
    //         message: "No Objectives has been modified!",
    //         data: response,
    //       });
    //     }
    //   }
    // );
  });
*/
