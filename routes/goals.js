const Goals = require("../models/goals");
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Objectives = require("../models/objective");
// const { logger } = require("../middleware/logger");
const userHistory = require("../models/userhistories");
const goals = require("../models/goals");
const Users = require("../models/user");
const Departments = require("../models/department");
const Notifications = require("../models/notifications");
// const { query, log } = require("winston");

module.exports = (router) => {
  router.get("/getObjectivesViewTable", async (req, res) => {
    Goals.aggregate(
      [
        {
          $match: {
            deleted: false,
          },
        },
        {
          $lookup: {
            from: "objectives",
            let: { objectiveIds: { $ifNull: ["$objectives", []] } },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $in: ["$id", { $ifNull: ["$$objectiveIds", []] }] },
                      { $eq: ["$deleted", false] },
                    ],
                  },
                },
              },
            ],
            as: "objectivesDetails",
          },
        },
        {
          $lookup: {
            as: "users",
            from: "users",
            foreignField: "id",
            localField: "createdBy",
          },
        },
        { $unwind: { path: "$users" } },
        {
          $addFields: {
            objectivesDetails: {
              $cond: {
                if: { $eq: ["$objectivesDetails", []] },
                then: null,
                else: "$objectivesDetails",
              },
            },
          },
        },
        {
          $project: {
            _id: 1,
            id: 1,
            goals: 1,
            budget: 1,
            department: 1,
            campus: 1,
            createdBy: 1,
            deleted: 1,
            date_added: 1,
            createdAt: 1,
            goallistsId: 1,
            __v: 1,
            updatedAt: 1,
            complete: 1,
            "users.id": 1,
            "users.username": 1,
            objectivesDetails: {
              $map: {
                input: { $ifNull: ["$objectivesDetails", []] },
                as: "od",
                in: {
                  id: "$$od.id",
                  functional_objective: "$$od.functional_objective",
                  performance_indicator: "$$od.performance_indicator",
                  target: "$$od.target",
                  formula: "$$od.formula",
                  programs: "$$od.programs",
                  responsible_persons: "$$od.responsible_persons",
                  clients: "$$od.clients",
                  remarks: "$$od.remarks",
                  month_0: "$$od.month_0",
                  month_1: "$$od.month_1",
                  month_2: "$$od.month_2",
                  month_3: "$$od.month_3",
                  month_4: "$$od.month_4",
                  month_5: "$$od.month_5",
                  month_6: "$$od.month_6",
                  month_7: "$$od.month_7",
                  month_8: "$$od.month_8",
                  month_9: "$$od.month_9",
                  month_10: "$$od.month_10",
                  month_11: "$$od.month_11",
                  file_month_0: "$$od.file_month_0",
                  file_month_1: "$$od.file_month_1",
                  file_month_2: "$$od.file_month_2",
                  file_month_3: "$$od.file_month_3",
                  file_month_4: "$$od.file_month_4",
                  file_month_5: "$$od.file_month_5",
                  file_month_6: "$$od.file_month_6",
                  file_month_7: "$$od.file_month_7",
                  file_month_8: "$$od.file_month_8",
                  file_month_9: "$$od.file_month_9",
                  file_month_10: "$$od.file_month_10",
                  file_month_11: "$$od.file_month_11",
                  goal_month_0: "$$od.goal_month_0",
                  goal_month_1: "$$od.goal_month_1",
                  goal_month_2: "$$od.goal_month_2",
                  goal_month_3: "$$od.goal_month_3",
                  goal_month_4: "$$od.goal_month_4",
                  goal_month_5: "$$od.goal_month_5",
                  goal_month_6: "$$od.goal_month_6",
                  goal_month_7: "$$od.goal_month_7",
                  goal_month_8: "$$od.goal_month_8",
                  goal_month_9: "$$od.goal_month_9",
                  goal_month_10: "$$od.goal_month_10",
                  goal_month_11: "$$od.goal_month_11",
                  quarter_1: "$$od.quarter_1",
                  quarter_2: "$$od.quarter_2",
                  quarter_3: "$$od.quarter_3",
                  quarter_0: "$$od.quarter_0",
                  file_quarter_1: "$$od.file_quarter_1",
                  file_quarter_2: "$$od.file_quarter_2",
                  file_quarter_3: "$$od.file_quarter_3",
                  file_quarter_0: "$$od.file_quarter_0",
                  goal_quarter_1: "$$od.goal_quarter_1",
                  goal_quarter_2: "$$od.goal_quarter_2",
                  goal_quarter_3: "$$od.goal_quarter_3",
                  goal_quarter_0: "$$od.goal_quarter_0",
                  semi_annual_0: "$$od.semi_annual_0",
                  semi_annual_1: "$$od.semi_annual_1",
                  semi_annual_2: "$$od.semi_annual_2",
                  file_semi_annual_0: "$$od.file_semi_annual_0",
                  file_semi_annual_1: "$$od.file_semi_annual_1",
                  file_semi_annual_2: "$$od.file_semi_annual_2",
                  goal_semi_annual_0: "$$od.goal_semi_annual_0",
                  goal_semi_annual_1: "$$od.goal_semi_annual_1",
                  goal_semi_annual_2: "$$od.goal_semi_annual_2",
                  frequency_monitoring: "$$od.frequency_monitoring",
                  timetable: "$$od.timetable",
                  complete: "$$od.complete",
                  data_source: "$$od.data_source",
                  budget: "$$od.budget",
                  date_added: "$$od.date_added",
                  createdBy: "$$od.createdBy",
                  updateby: "$$od.updateby",
                  updateDate: "$$od.updateDate",
                  createdAt: "$$od.createdAt",
                  deleted: "$$od.deleted",
                },
              },
            },
          },
        },
      ],
      { allowDiskUse: true },
      async (err, Goals) => {
        // Check if error was found or not
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!Goals || Goals.length === 0) {
            res.json({
              success: false,
              message: "No Goals found.",
              Goals: [],
            }); // Return error of no blogs found
          } else {
            let returnedData = await Promise.all(
              await CalculateBudgetAndCompletion(Goals)
            );

            res.json({
              success: true,
              goals: returnedData,
              // originalData: Goals,
            }); // Return success and blogs array
          }
        }
      }
    ).sort({ _id: -1 });
  });

  router.get("/getGoalForCreatingObjective/:goal_id", async (req, res) => {
    const results = await Goals.findOne(
      { id: req.params.goal_id, deleted: false },
      {
        _id: 1,
        id: 1,
        goals: 1,
        strategic_objective: 1,
        strategic_id: 1,
      }
    );

    return res
      .status(200)
      .json({ success: true, message: "Goal found", goal: results });
  });

  router.get("/getGoalsForDashboard", async (req, res) => {
    let data = [];
    try {
      let goalCount = await Goals.countDocuments({ deleted: false });
      let goalDeletedCount = await Goals.countDocuments({ deleted: true });
      let goalAmountTotal = await Goals.aggregate([
        {
          $match: {
            deleted: false,
          },
        },
        {
          $group: {
            _id: null,
            totalAmount: { $sum: "$budget" },
          },
        },
      ]);
      data.push({
        goalCount: goalCount,
        goalDeletedCount: goalDeletedCount,
        totalBudget: goalAmountTotal,
      });
      res.json({ success: true, data: data });
    } catch (error) {
      res.json({ success: false, message: error });
    }
  });

  router.get("/getAllObjectivesWithObjectives", (req, res) => {
    Goals.aggregate(
      [
        {
          $match: {
            deleted: false,
          },
        },
        {
          $lookup: {
            from: "objectives",
            let: { objectiveIds: { $ifNull: ["$objectives", []] } },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $in: ["$id", { $ifNull: ["$$objectiveIds", []] }] },
                      { $eq: ["$deleted", false] },
                    ],
                  },
                },
              },
            ],
            as: "objectivesDetails",
          },
        },
        {
          $lookup: {
            as: "users",
            from: "users",
            foreignField: "id",
            localField: "createdBy",
          },
        },
        { $unwind: { path: "$users" } },
        {
          $addFields: {
            objectivesDetails: {
              $cond: {
                if: { $eq: ["$objectivesDetails", []] },
                then: null,
                else: "$objectivesDetails",
              },
            },
          },
        },
        {
          $project: {
            _id: 1,
            id: 1,
            goals: 1,
            // budget: 1,
            department: 1,
            campus: 1,
            createdBy: 1,
            deleted: 1,
            date_added: 1,
            createdAt: 1,
            goallistsId: 1,
            __v: 1,
            updatedAt: 1,
            complete: 1,
            "users.id": 1,
            "users.username": 1,
            "users.firstname": 1,
            "users.lastname": 1,
            "users.role": 1,
            "users.email": 1,
            "users.profile_pic": 1,
            "users.department": 1,
            objectivesDetails: {
              $map: {
                input: { $ifNull: ["$objectivesDetails", []] },
                as: "od",
                in: {
                  id: "$$od.id",
                  functional_objective: "$$od.functional_objective",
                  performance_indicator: "$$od.performance_indicator",
                  target: "$$od.target",
                  formula: "$$od.formula",
                  programs: "$$od.programs",
                  responsible_persons: "$$od.responsible_persons",
                  clients: "$$od.clients",
                  remarks: "$$od.remarks",
                  month_0: "$$od.month_0",
                  month_1: "$$od.month_1",
                  month_2: "$$od.month_2",
                  month_3: "$$od.month_3",
                  month_4: "$$od.month_4",
                  month_5: "$$od.month_5",
                  month_6: "$$od.month_6",
                  month_7: "$$od.month_7",
                  month_8: "$$od.month_8",
                  month_9: "$$od.month_9",
                  month_10: "$$od.month_10",
                  month_11: "$$od.month_11",
                  file_month_0: "$$od.file_month_0",
                  file_month_1: "$$od.file_month_1",
                  file_month_2: "$$od.file_month_2",
                  file_month_3: "$$od.file_month_3",
                  file_month_4: "$$od.file_month_4",
                  file_month_5: "$$od.file_month_5",
                  file_month_6: "$$od.file_month_6",
                  file_month_7: "$$od.file_month_7",
                  file_month_8: "$$od.file_month_8",
                  file_month_9: "$$od.file_month_9",
                  file_month_10: "$$od.file_month_10",
                  file_month_11: "$$od.file_month_11",
                  goal_month_0: "$$od.goal_month_0",
                  goal_month_1: "$$od.goal_month_1",
                  goal_month_2: "$$od.goal_month_2",
                  goal_month_3: "$$od.goal_month_3",
                  goal_month_4: "$$od.goal_month_4",
                  goal_month_5: "$$od.goal_month_5",
                  goal_month_6: "$$od.goal_month_6",
                  goal_month_7: "$$od.goal_month_7",
                  goal_month_8: "$$od.goal_month_8",
                  goal_month_9: "$$od.goal_month_9",
                  goal_month_10: "$$od.goal_month_10",
                  goal_month_11: "$$od.goal_month_11",
                  quarter_1: "$$od.quarter_1",
                  quarter_2: "$$od.quarter_2",
                  quarter_3: "$$od.quarter_3",
                  quarter_0: "$$od.quarter_0",
                  file_quarter_1: "$$od.file_quarter_1",
                  file_quarter_2: "$$od.file_quarter_2",
                  file_quarter_3: "$$od.file_quarter_3",
                  file_quarter_0: "$$od.file_quarter_0",
                  goal_quarter_1: "$$od.goal_quarter_1",
                  goal_quarter_2: "$$od.goal_quarter_2",
                  goal_quarter_3: "$$od.goal_quarter_3",
                  goal_quarter_0: "$$od.goal_quarter_0",
                  semi_annual_0: "$$od.semi_annual_0",
                  semi_annual_1: "$$od.semi_annual_1",
                  semi_annual_2: "$$od.semi_annual_2",
                  file_semi_annual_0: "$$od.file_semi_annual_0",
                  file_semi_annual_1: "$$od.file_semi_annual_1",
                  file_semi_annual_2: "$$od.file_semi_annual_2",
                  goal_semi_annual_0: "$$od.goal_semi_annual_0",
                  goal_semi_annual_1: "$$od.goal_semi_annual_1",
                  goal_semi_annual_2: "$$od.goal_semi_annual_2",

                  goal_year_0: "$$od.goal_year_0",
                  yearly_0: "$$od.yearly_0",
                  file_year_0: "$$od.file_year_0",

                  frequency_monitoring: "$$od.frequency_monitoring",
                  timetable: "$$od.timetable",
                  complete: "$$od.complete",
                  data_source: "$$od.data_source",
                  budget: "$$od.budget",
                  date_added: "$$od.date_added",
                  createdBy: "$$od.createdBy",
                  updateby: "$$od.updateby",
                  updateDate: "$$od.updateDate",
                  createdAt: "$$od.createdAt",
                  deleted: "$$od.deleted",
                },
              },
            },
          },
        },
      ],
      { allowDiskUse: true },
      async (err, Goals) => {
        // Check if error was found or not
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!Goals || Goals.length === 0) {
            res.json({
              success: false,
              message: "No Goals found.",
              Goals: [],
            }); // Return error of no blogs found
          } else {
            res.json({
              success: true,
              goals: await CalculateBudgetAndCompletion(Goals),
              office_dropdown: await getBarChartsData(Goals),
            }); // Return success and blogs array
          }
        }
      }
    ).sort({ _id: -1 });

    // ).sort({ _id: -1 }); // Sort blogs from newest to oldest
  });

  router.get("/getAllObjectivesWithObjectivesForCharts", (req, res) => {
    Goals.aggregate(
      [
        {
          $match: {
            deleted: false,
          },
        },
        {
          $lookup: {
            from: "objectives",
            let: { objectiveIds: { $ifNull: ["$objectives", []] } },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $in: ["$id", { $ifNull: ["$$objectiveIds", []] }] },
                      { $eq: ["$deleted", false] },
                    ],
                  },
                },
              },
            ],
            as: "objectivesDetails",
          },
        },
        {
          $lookup: {
            as: "users",
            from: "users",
            foreignField: "id",
            localField: "createdBy",
          },
        },
        { $unwind: { path: "$users" } },
        {
          $addFields: {
            objectivesDetails: {
              $cond: {
                if: { $eq: ["$objectivesDetails", []] },
                then: null,
                else: "$objectivesDetails",
              },
            },
          },
        },
        {
          $project: {
            _id: 1,
            id: 1,
            goals: 1,
            budget: 1,
            department: 1,
            campus: 1,
            createdBy: 1,
            deleted: 1,
            date_added: 1,
            createdAt: 1,
            goallistsId: 1,
            __v: 1,
            updatedAt: 1,
            complete: 1,
            "users.id": 1,
            "users.username": 1,
            objectivesDetails: {
              $map: {
                input: { $ifNull: ["$objectivesDetails", []] },
                as: "od",
                in: {
                  id: "$$od.id",
                  functional_objective: "$$od.functional_objective",
                  performance_indicator: "$$od.performance_indicator",
                  target: "$$od.target",
                  formula: "$$od.formula",
                  programs: "$$od.programs",
                  responsible_persons: "$$od.responsible_persons",
                  clients: "$$od.clients",
                  remarks: "$$od.remarks",
                  month_0: "$$od.month_0",
                  month_1: "$$od.month_1",
                  month_2: "$$od.month_2",
                  month_3: "$$od.month_3",
                  month_4: "$$od.month_4",
                  month_5: "$$od.month_5",
                  month_6: "$$od.month_6",
                  month_7: "$$od.month_7",
                  month_8: "$$od.month_8",
                  month_9: "$$od.month_9",
                  month_10: "$$od.month_10",
                  month_11: "$$od.month_11",
                  file_month_0: "$$od.file_month_0",
                  file_month_1: "$$od.file_month_1",
                  file_month_2: "$$od.file_month_2",
                  file_month_3: "$$od.file_month_3",
                  file_month_4: "$$od.file_month_4",
                  file_month_5: "$$od.file_month_5",
                  file_month_6: "$$od.file_month_6",
                  file_month_7: "$$od.file_month_7",
                  file_month_8: "$$od.file_month_8",
                  file_month_9: "$$od.file_month_9",
                  file_month_10: "$$od.file_month_10",
                  file_month_11: "$$od.file_month_11",
                  goal_month_0: "$$od.goal_month_0",
                  goal_month_1: "$$od.goal_month_1",
                  goal_month_2: "$$od.goal_month_2",
                  goal_month_3: "$$od.goal_month_3",
                  goal_month_4: "$$od.goal_month_4",
                  goal_month_5: "$$od.goal_month_5",
                  goal_month_6: "$$od.goal_month_6",
                  goal_month_7: "$$od.goal_month_7",
                  goal_month_8: "$$od.goal_month_8",
                  goal_month_9: "$$od.goal_month_9",
                  goal_month_10: "$$od.goal_month_10",
                  goal_month_11: "$$od.goal_month_11",
                  quarter_1: "$$od.quarter_1",
                  quarter_2: "$$od.quarter_2",
                  quarter_3: "$$od.quarter_3",
                  quarter_0: "$$od.quarter_0",
                  file_quarter_1: "$$od.file_quarter_1",
                  file_quarter_2: "$$od.file_quarter_2",
                  file_quarter_3: "$$od.file_quarter_3",
                  file_quarter_0: "$$od.file_quarter_0",
                  goal_quarter_1: "$$od.goal_quarter_1",
                  goal_quarter_2: "$$od.goal_quarter_2",
                  goal_quarter_3: "$$od.goal_quarter_3",
                  goal_quarter_0: "$$od.goal_quarter_0",
                  semi_annual_0: "$$od.semi_annual_0",
                  semi_annual_1: "$$od.semi_annual_1",
                  semi_annual_2: "$$od.semi_annual_2",
                  file_semi_annual_0: "$$od.file_semi_annual_0",
                  file_semi_annual_1: "$$od.file_semi_annual_1",
                  file_semi_annual_2: "$$od.file_semi_annual_2",
                  goal_semi_annual_0: "$$od.goal_semi_annual_0",
                  goal_semi_annual_1: "$$od.goal_semi_annual_1",
                  goal_semi_annual_2: "$$od.goal_semi_annual_2",
                  frequency_monitoring: "$$od.frequency_monitoring",
                  timetable: "$$od.timetable",
                  complete: "$$od.complete",
                  data_source: "$$od.data_source",
                  budget: "$$od.budget",
                  date_added: "$$od.date_added",
                  createdBy: "$$od.createdBy",
                  updateby: "$$od.updateby",
                  updateDate: "$$od.updateDate",
                  createdAt: "$$od.createdAt",
                  deleted: "$$od.deleted",
                  strategic_objective: "$$od.strategic_objective",
                },
              },
            },
          },
        },
      ],
      { allowDiskUse: true },
      async (err, Goals) => {
        // Check if error was found or not
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!Goals || Goals.length === 0) {
            res.json({
              success: false,
              message: "No Goals found.",
              Goals: [],
            }); // Return error of no blogs found
          } else {
            // let returnedData = await Promise.all(
            //   await CalculateBudgetAndCompletion(Goals),

            // );
            // console.log({ returnedData });
            res.json({
              success: true,
              // goalDropdown: GoalsWithDropdown,
              goals: await CalculateBudgetAndCompletion(Goals),
              goalDropdown: await getBarChartsData(Goals),
              // multi : GoalsBarCharts
            }); // Return success and blogs array
          }
        }
      }
    ).sort({ _id: -1 });

    // ).sort({ _id: -1 }); // Sort blogs from newest to oldest
  });

  router.get("/getAllObjectivesUnderDirector/:director", (req, res) => {
    let directorID = req.params.director;

    const officeHeadId = Users.aggregate([
      {
        $match: {
          director_id: directorID,
        },
      },
      {
        $project: {
          id: 1,
        },
      },
    ]);

    Goals.aggregate(
      [
        {
          $match: {
            deleted: false,
          },
        },
        {
          $lookup: {
            from: "objectives",
            let: { objectiveIds: { $ifNull: ["$objectives", []] } },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $in: ["$id", { $ifNull: ["$$objectiveIds", []] }] },
                      { $eq: ["$deleted", false] },
                    ],
                  },
                },
              },
            ],
            as: "objectivesDetails",
          },
        },
        {
          $lookup: {
            as: "users",
            from: "users",
            foreignField: "id",
            localField: "createdBy",
          },
        },
        { $unwind: { path: "$users" } },
        {
          $addFields: {
            objectivesDetails: {
              $cond: {
                if: { $eq: ["$objectivesDetails", []] },
                then: null,
                else: "$objectivesDetails",
              },
            },
          },
        },
        {
          $project: {
            _id: 1,
            id: 1,
            goals: 1,
            budget: 1,
            department: 1,
            campus: 1,
            createdBy: 1,
            deleted: 1,
            date_added: 1,
            createdAt: 1,
            goallistsId: 1,
            __v: 1,
            updatedAt: 1,
            complete: 1,
            "users.id": 1,
            "users.username": 1,
            objectivesDetails: {
              $map: {
                input: { $ifNull: ["$objectivesDetails", []] },
                as: "od",
                in: {
                  id: "$$od.id",
                  functional_objective: "$$od.functional_objective",
                  performance_indicator: "$$od.performance_indicator",
                  target: "$$od.target",
                  formula: "$$od.formula",
                  programs: "$$od.programs",
                  responsible_persons: "$$od.responsible_persons",
                  clients: "$$od.clients",
                  remarks: "$$od.remarks",
                  month_0: "$$od.month_0",
                  month_1: "$$od.month_1",
                  month_2: "$$od.month_2",
                  month_3: "$$od.month_3",
                  month_4: "$$od.month_4",
                  month_5: "$$od.month_5",
                  month_6: "$$od.month_6",
                  month_7: "$$od.month_7",
                  month_8: "$$od.month_8",
                  month_9: "$$od.month_9",
                  month_10: "$$od.month_10",
                  month_11: "$$od.month_11",
                  file_month_0: "$$od.file_month_0",
                  file_month_1: "$$od.file_month_1",
                  file_month_2: "$$od.file_month_2",
                  file_month_3: "$$od.file_month_3",
                  file_month_4: "$$od.file_month_4",
                  file_month_5: "$$od.file_month_5",
                  file_month_6: "$$od.file_month_6",
                  file_month_7: "$$od.file_month_7",
                  file_month_8: "$$od.file_month_8",
                  file_month_9: "$$od.file_month_9",
                  file_month_10: "$$od.file_month_10",
                  file_month_11: "$$od.file_month_11",
                  goal_month_0: "$$od.goal_month_0",
                  goal_month_1: "$$od.goal_month_1",
                  goal_month_2: "$$od.goal_month_2",
                  goal_month_3: "$$od.goal_month_3",
                  goal_month_4: "$$od.goal_month_4",
                  goal_month_5: "$$od.goal_month_5",
                  goal_month_6: "$$od.goal_month_6",
                  goal_month_7: "$$od.goal_month_7",
                  goal_month_8: "$$od.goal_month_8",
                  goal_month_9: "$$od.goal_month_9",
                  goal_month_10: "$$od.goal_month_10",
                  goal_month_11: "$$od.goal_month_11",
                  quarter_1: "$$od.quarter_1",
                  quarter_2: "$$od.quarter_2",
                  quarter_3: "$$od.quarter_3",
                  quarter_0: "$$od.quarter_0",
                  file_quarter_1: "$$od.file_quarter_1",
                  file_quarter_2: "$$od.file_quarter_2",
                  file_quarter_3: "$$od.file_quarter_3",
                  file_quarter_0: "$$od.file_quarter_0",
                  goal_quarter_1: "$$od.goal_quarter_1",
                  goal_quarter_2: "$$od.goal_quarter_2",
                  goal_quarter_3: "$$od.goal_quarter_3",
                  goal_quarter_0: "$$od.goal_quarter_0",
                  semi_annual_0: "$$od.semi_annual_0",
                  semi_annual_1: "$$od.semi_annual_1",
                  semi_annual_2: "$$od.semi_annual_2",
                  file_semi_annual_0: "$$od.file_semi_annual_0",
                  file_semi_annual_1: "$$od.file_semi_annual_1",
                  file_semi_annual_2: "$$od.file_semi_annual_2",
                  goal_semi_annual_0: "$$od.goal_semi_annual_0",
                  goal_semi_annual_1: "$$od.goal_semi_annual_1",
                  goal_semi_annual_2: "$$od.goal_semi_annual_2",
                  frequency_monitoring: "$$od.frequency_monitoring",
                  timetable: "$$od.timetable",
                  complete: "$$od.complete",
                  data_source: "$$od.data_source",
                  budget: "$$od.budget",
                  date_added: "$$od.date_added",
                  createdBy: "$$od.createdBy",
                  updateby: "$$od.updateby",
                  updateDate: "$$od.updateDate",
                  createdAt: "$$od.createdAt",
                  deleted: "$$od.deleted",
                },
              },
            },
          },
        },
      ],
      { allowDiskUse: true },
      async (err, Goals) => {
        // Check if error was found or not
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!Goals || Goals.length === 0) {
            res.json({
              success: false,
              message: "No Goals found.",
              Goals: [],
            }); // Return error of no blogs found
          } else {
            let returnedData = await Promise.all(
              await CalculateBudgetAndCompletion(Goals)
            );

            res.json({ success: true, goals: returnedData }); // Return success and blogs array
          }
        }
      }
    ).sort({ _id: -1 });

    // ).sort({ _id: -1 }); // Sort blogs from newest to oldest
  });

  router.get(
    "/getAllObjectivesWithObjectivesForDashboard/:campus?",
    (req, res) => {
      let finalMatch = { deleted: false }; // Start with the base filter
      if (req.params.campus === "undefined") {
        finalMatch = {
          deleted: false,
        };
      } else {
        finalMatch = {
          deleted: false,
          campus: req.params.campus,
        };
      }
      Goals.aggregate(
        [
          {
            $match: finalMatch,
          },
          {
            $lookup: {
              from: "objectives",
              let: { objectiveIds: { $ifNull: ["$objectives", []] } },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $in: ["$id", { $ifNull: ["$$objectiveIds", []] }] },
                        { $eq: ["$deleted", false] },
                      ],
                    },
                  },
                },
              ],
              as: "objectivesDetails",
            },
          },
          {
            $match: {
              "objectivesDetails.deleted": false,
            },
          },
          {
            $lookup: {
              as: "users",
              from: "users",
              foreignField: "id",
              localField: "createdBy",
            },
          },
          { $unwind: { path: "$users" } },
          {
            $addFields: {
              objectivesDetails: {
                $cond: {
                  if: { $eq: ["$objectivesDetails", []] },
                  then: null,
                  else: "$objectivesDetails",
                },
              },
            },
          },
          {
            $project: {
              _id: 1,
              id: 1,
              goals: 1,
              budget: 1,
              department: 1,
              campus: 1,
              createdBy: 1,
              goallistsId: 1,
              deleted: 1,
              goalData: 1,
              date_added: 1,
              createdAt: 1,
              __v: 1,
              updatedAt: 1,
              complete: 1,
              "users.id": 1,
              "users.username": 1,
              objectivesDetails: {
                $cond: {
                  if: { $eq: ["$objectivesDetails", null] },
                  then: null,
                  else: {
                    $map: {
                      input: "$objectivesDetails",
                      as: "od",
                      in: {
                        id: "$$od.id",
                        functional_objective: "$$od.functional_objective",
                        performance_indicator: "$$od.performance_indicator",
                        target: "$$od.target",
                        formula: "$$od.formula",
                        programs: "$$od.programs",
                        responsible_persons: "$$od.responsible_persons",
                        clients: "$$od.clients",
                        remarks: "$$od.remarks",
                        month_0: "$$od.month_0",
                        month_1: "$$od.month_1",
                        month_2: "$$od.month_2",
                        month_3: "$$od.month_3",
                        month_4: "$$od.month_4",
                        month_5: "$$od.month_5",
                        month_6: "$$od.month_6",
                        month_7: "$$od.month_7",
                        month_8: "$$od.month_8",
                        month_9: "$$od.month_9",
                        month_10: "$$od.month_10",
                        month_11: "$$od.month_11",
                        file_month_0: "$$od.file_month_0",
                        file_month_1: "$$od.file_month_1",
                        file_month_2: "$$od.file_month_2",
                        file_month_3: "$$od.file_month_3",
                        file_month_4: "$$od.file_month_4",
                        file_month_5: "$$od.file_month_5",
                        file_month_6: "$$od.file_month_6",
                        file_month_7: "$$od.file_month_7",
                        file_month_8: "$$od.file_month_8",
                        file_month_9: "$$od.file_month_9",
                        file_month_10: "$$od.file_month_10",
                        file_month_11: "$$od.file_month_11",
                        goal_month_0: "$$od.goal_month_0",
                        goal_month_1: "$$od.goal_month_1",
                        goal_month_2: "$$od.goal_month_2",
                        goal_month_3: "$$od.goal_month_3",
                        goal_month_4: "$$od.goal_month_4",
                        goal_month_5: "$$od.goal_month_5",
                        goal_month_6: "$$od.goal_month_6",
                        goal_month_7: "$$od.goal_month_7",
                        goal_month_8: "$$od.goal_month_8",
                        goal_month_9: "$$od.goal_month_9",
                        goal_month_10: "$$od.goal_month_10",
                        goal_month_11: "$$od.goal_month_11",
                        quarter_1: "$$od.quarter_1",
                        quarter_2: "$$od.quarter_2",
                        quarter_3: "$$od.quarter_3",
                        quarter_0: "$$od.quarter_0",
                        file_quarter_1: "$$od.file_quarter_1",
                        file_quarter_2: "$$od.file_quarter_2",
                        file_quarter_3: "$$od.file_quarter_3",
                        file_quarter_0: "$$od.file_quarter_0",
                        goal_quarter_1: "$$od.goal_quarter_1",
                        goal_quarter_2: "$$od.goal_quarter_2",
                        goal_quarter_3: "$$od.goal_quarter_3",
                        goal_quarter_0: "$$od.goal_quarter_0",
                        semi_annual_0: "$$od.semi_annual_0",
                        semi_annual_1: "$$od.semi_annual_1",
                        semi_annual_2: "$$od.semi_annual_2",
                        file_semi_annual_0: "$$od.file_semi_annual_0",
                        file_semi_annual_1: "$$od.file_semi_annual_1",
                        file_semi_annual_2: "$$od.file_semi_annual_2",
                        goal_semi_annual_0: "$$od.goal_semi_annual_0",
                        goal_semi_annual_1: "$$od.goal_semi_annual_1",
                        goal_semi_annual_2: "$$od.goal_semi_annual_2",

                        goal_year_0: "$$od.goal_year_0",
                        yearly_0: "$$od.yearly_0",
                        file_year_0: "$$od.file_year_0",

                        frequency_monitoring: "$$od.frequency_monitoring",
                        timetable: "$$od.timetable",
                        complete: "$$od.complete",
                        data_source: "$$od.data_source",
                        budget: "$$od.budget",
                        date_added: "$$od.date_added",
                        createdBy: "$$od.createdBy",
                        updateby: "$$od.updateby",
                        updateDate: "$$od.updateDate",
                        createdAt: "$$od.createdAt",
                        deleted: "$$od.deleted",
                        strategic_objective: "$$od.strategic_objective",
                      },
                    },
                  },
                },
              },
            },
          },
        ],
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        { allowDiskUse: true },
        async (err, Goals) => {
          // Check if error was found or not
          if (err) {
            res.json({ success: false, message: err });
          } else {
            if (!Goals || Goals.length === 0) {
              res.json({
                success: false,
                message: "No Goals found.",
                Goals: [],
              }); // Return error of no blogs found
            } else {
              // let returnedData = await Promise.all(
              //   await CalculateBudgetAndCompletion(Goals),

              // );
              // console.log({ returnedData });
              res.json({
                success: true,
                // goalDropdown: GoalsWithDropdown,
                goals: await CalculateBudgetAndCompletion(Goals),
                goalDropdown: await getBarChartsData(Goals),
                // multi : GoalsBarCharts
              }); // Return success and blogs array
            }
          }
        }
      ).sort({ _id: -1 });
    }
  );

  async function getBarChartsData(data) {
    let goalDropdown = [];
    let uniqueDepartments = new Set();
    data.forEach((goal) => {
      if (!uniqueDepartments.has(goal.department)) {
        uniqueDepartments.add(goal.department);
        goalDropdown.push({
          name: goal.department,
          code: goal.department,
          id: goal.id,
        });
      }
    });
    return goalDropdown;
    // return Array.from(new Set(goalDropdown.map(JSON.stringify))).map(
    //   JSON.parse
    // );
  }

  async function CalculateBudgetAndCompletion(data) {
    return await Promise.all(
      data.map(async (goal) => {
        // Calculate percentage and remaining
        // let totalObjectiveBudget = 0;
        // goal.remainingBudget = goal.budget;
        // Calculate completed goals percentage
        let totalCompletion = 0;
        let totalObjectives = 0;

        if (goal.objectivesDetails !== null) {
          for (let e of goal.objectivesDetails) {
            // Calculate percentage and remaining
            // goal.remainingBudget -= e.budget;
            // totalObjectiveBudget += e.budget;

            // Calculate completed goals percentage
            let objectiveCompletion = 0;
            let count = 0;
            let goalSum = 0;

            if (e.frequency_monitoring === "yearly") {
              for (let i = 0; i < 1; i++) {
                const key = `yearly_${i}`;
                if (e[key] !== undefined) {
                  goalSum += e[key];
                  count++;
                }
              }
            } else if (e.frequency_monitoring === "monthly") {
              for (let i = 0; i < 12; i++) {
                const key = `month_${i}`;
                if (e[key] !== undefined) {
                  goalSum += e[key];
                  count++;
                }
              }
            } else if (e.frequency_monitoring === "quarterly") {
              for (let i = 0; i < 4; i++) {
                const key = `quarter_${i}`;
                if (e[key] !== undefined) {
                  goalSum += e[key];
                  count++;
                }
              }
            } else if (e.frequency_monitoring === "semi_annual") {
              for (let i = 0; i < 2; i++) {
                const key = `semi_annual_${i}`;
                if (e[key] !== undefined) {
                  goalSum += e[key];
                  count++;
                }
              }
            }

            if (count > 0) {
              objectiveCompletion = (goalSum / e.target) * 100;
              totalCompletion += objectiveCompletion;
              totalObjectives++;
            }

            // Add complete key to each objective
            // e.complete = goalSum === e.target;
          }

          // Calculate percentage and remaining
          // goal.budgetMinusAllObjectiveBudget = totalObjectiveBudget;
          goal.remainingPercentage = (
            (goal.budgetMinusAllObjectiveBudget / goal.budget) *
            100
          ).toFixed(2);

          goal.searchDate = await formatIsoDate(goal.createdAt);

          // Add completion percentage to the root of the goal
          if (totalObjectives > 0) {
            goal.completion_percentage = Math.round(
              totalCompletion / totalObjectives
            );
          } else {
            goal.completion_percentage = 0;
          }

          // Add complete key based on completion percentage
          goal.complete = goal.completion_percentage === 100;
        }
        return goal;
      })
    );
  }
  // async function CalculateBudgetAndCompletion(data) {
  //   return await data.map(async (goal) => {
  //     //calculate percentage and remaining
  //     let totalObjectiveBudget = 0;
  //     goal.remainingBudget = goal.budget;

  //     //calculate completed goals percentage
  //     let completionCounterArray = [];

  //     if (goal.objectivesDetails !== null) {
  //       for (let e of goal.objectivesDetails) {
  //         //calculate percentage and remaining
  //         goal.remainingBudget -= e.budget;
  //         totalObjectiveBudget += e.budget;
  //         completionCounterArray.push(e.complete);
  //         //calculate completed goals percentage
  //       }

  //       //calculate percentage and remaining
  //       goal.budgetMinusAllObjectiveBudget = totalObjectiveBudget;
  //       goal.remainingPercentage = (
  //         (goal.budgetMinusAllObjectiveBudget / goal.budget) *
  //         100
  //       ).toFixed(2);

  //       //calculate completed goals percentage
  //       let numberOfTrueValues = completionCounterArray.filter(
  //         (value) => value === true
  //       ).length; // Count the number of true values in the array
  //       let totalValues = completionCounterArray.length; // Count the total number of values in the array
  //       let percentage = Math.round((numberOfTrueValues / totalValues) * 100); // Calculate the percentage
  //       goal.CompletePercentage = percentage; // Assign the percentage to the goal object
  //       goal.searchDate = await formatIsoDate(goal.createdAt);
  //     }
  //     return goal;
  //   });
  // }

  async function formatIsoDate(isoDateString) {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  router.get(
    "/getAllObjectivesWithObjectivesForBarChartsDashboard/:campus?",
    async (req, res) => {
      try {
        let finalMatch = { deleted: false };
        if (req.params.campus !== "undefined") {
          finalMatch = { ...finalMatch, campus: req.params.campus };
        }
        if (req.params.campus === "undefined") {
          finalMatch = {
            deleted: false,
          };
        } else {
          finalMatch = {
            deleted: false,
            campus: req.params.campus,
          };
        }

        let multiData = await Goals.aggregate([
          {
            $match: finalMatch,
          },

          //   { $match: { deleted: false } },
          {
            $lookup: {
              from: "objectives", // Lookup the objectives associated with each goal
              localField: "id",
              foreignField: "goalId",
              as: "goalDetails",
            },
          }, // Keep your existing lookup to "objectives" as "goalDetails"

          // Crucial Change: Filter out empty "goalDetails" arrays BEFORE unwinding
          { $match: { goalDetails: { $ne: [] } } },

          { $unwind: "$goalDetails" },

          // This $match stage should already be redundant as we have filtered out empty goalDetails
          // { $match: { "goalDetails.functional_objective": { $ne: null } } }, // Ensure functional_objective exists

          {
            $group: {
              _id: "$goals",
              series: {
                $push: {
                  name: "$goalDetails.functional_objective",
                  value: "$goalDetails.budget",
                },
              },
            },
          },
          {
            $project: {
              _id: 0,
              name: "$_id",
              series: 1,
            },
          },
        ]);
        return res.status(200).json({
          success: true,
          multi: multiData,
        });
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
    }
  );

  router.get("/getAllGoals", (req, res) => {
    Goals.aggregate(
      [
        { $match: { deleted: false } }, // Filter by delete:false status
        {
          $lookup: {
            as: "users",
            from: "users",
            foreignField: "id",
            localField: "createdBy",
          },
        },
        { $unwind: { path: "$users" } },
        {
          $project: {
            budget: 1,
            createdAt: 1,
            createdBy: 1,
            date_added: 1,
            goals: 1,
            id: 1,
            _id: 1,
            objectives: 1,
            updateDate: 1,
            "users.id": 1,
            "users.username": 1,
          },
        },
      ],
      { maxTimeMS: 60000, allowDiskUse: true },
      (err, Goals) => {
        // Check if error was found or not
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!Goals || Goals.length === 0) {
            res.json({
              success: false,
              message: "No Goals found.",
              Goals: [],
            }); // Return error of no blogs found
          } else {
            res.json({ success: true, goals: Goals }); // Return success and blogs array
          }
        }
      }
    ).sort({ _id: -1 });

    // ).sort({ _id: -1 }); // Sort blogs from newest to oldest
  });

  router.post("/findGoalsById", (req, res) => {
    Goals.findOne({ id: req.body.id }, "-deleted -__v", function (err, Goals) {
      if (err) {
        res.json({ success: false, message: "Goals not found" });
      } else {
        if (!Goals) {
          res.json({ success: false, message: "No Goals found." });
        } else {
          res.json({ success: true, Goals: Goals });
        }
      }
    });
  });

  router.post("/addGoals", (req, res) => {
    let {
      goals,
      // budget,
      createdBy,
      campus,
      department,
      goallistsId,
      strategic_id,
      strategic_objective,
    } = req.body;

    if (!goals) {
      return res.json({
        success: false,
        message: "You must provide an Goals and Action Plan Information",
      });
    }

    let goalsDataRequest = {
      id: uuidv4(),
      goals,
      // budget,
      campus,
      department,
      createdBy,
      goallistsId,
      strategic_id,
      strategic_objective: strategic_objective.toLowerCase(),
    };

    Goals.create(goalsDataRequest)
      .then((data) => {
        userHistory.create({
          userId: req.decoded.id,
          activityType: "PUT",
          activityDetails: {
            url: "goals/addGoals",
            data: goalsDataRequest,
            action: "Added Goals",
          },
        });

        // add to the notifications
        // Notifications.create({
        //   userId: req.decoded.id,
        //   message: `New goal added: ${data.goals}`,
        //   type: "goal_added",
        //   createdAt: new Date(),
        //   metadata: data,
        // });

        res.json({
          success: true,
          message: "This  Goals and Action Plan Goals is successfully Added ",
          data: { goals: data },
        });
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.json({
            success: false,
            message: " Goals and Action Plan Goals Name already exists ",
            err: err.message,
          });
        } else if (err.errors) {
          const errors = Object.keys(err.errors);
          res.json({ success: false, message: err.errors[errors[0]].message });
        } else {
          res.json({
            success: false,
            message:
              "Could not add  Goals and Action Plan Error : " + err.message,
          });
        }
      });
  });

  router.put("/deleteGoals", (req, res) => {

    // const token = req.header('Authorization')?.split(' ')[1];
    const decoded = req.decoded.id
    console.log(decoded)

    let data = req.body;
    let ObjectivesArray = [];

    Goals.find({ _id: ObjectId(data._id) }, (err, GoalsFindRes) => {
      ObjectivesArray = GoalsFindRes.map((e) => e.objectives);
      if (err) {
        return res.json({ success: false, message: err.message });
      }
      if (!GoalsFindRes || GoalsFindRes.length === 0) {
        return res.json({
          success: false,
          message: "No Goals found.",
          GoalsFindRes: [],
        }); // Return error of no blogs found
      } else {
        Goals.updateOne(
          { _id: ObjectId(data._id) },
          { deleted: true },
          (err, response) => {
            if (err) {
              return res.json({ success: false, message: err.message });
            }

              // add to the notifications
                      // Notifications.create({
                      //   userId: req.decoded.id,
                      //   title: "Goals Deleted",
                      //   message: `deleted a : ${GoalsFindRes[0].goals}`,
                      //   type: "goal_deleted",
                      //   createdAt: new Date(),
                      //   metadata : GoalsFindRes
                      // });

            if (response.modifiedCount > 0) {
              Objectives.updateMany(
                {
                  id: {
                    // use the [0] instead of objectivesarray
                    $in: ObjectivesArray[0],
                  },
                },
                { $set: { deleted: true } },
                (err, response) => {
                  if (err) {
                    return res.json({ success: false, message: err.message });
                  }

                  if (response.acknowledged) {
                 
                    res.json({
                      success: true,
                      message: "Successfully Delete Goals",
                      data: response,
                    });
                  }
                }
              );
            } else {
              res.json({
                success: false,
                message: "Could Delete Goals" + err,
              });
            }
          }
        );
      }
    });
  });

  router.put("/setInactiveGoals", (req, res) => {
    let data = req.body;

    Goals.findOne(
      {
        id: data.id,
      },
      (err) => {
        if (err) throw err;
        Goals.findOneAndUpdate(
          { id: data.id },
          { deleted: true },
          { upsert: true, select: "-__v" },
          (err, response) => {
            if (err) return res.json({ success: false, message: err.message });
            if (response) {

              // Notifications.create({
              //   userId: req.decoded.id,
              //   message: `deleted a : ${Goals.goals}`,
              //   type: "goal_deleted",
              //   createdAt: new Date(),
              //   metadata : Goals
              // });


              res.json({
                success: true,
                message: " Successfully Delete Goals",
                data: response,
              });
            } else {
              res.json({
                success: false,
                message: "Could Delete Goals" + err,
              });
            }
          }
        );
      }
    );
  });

  router.put("/updateGoals", async (req, res) => {
    let data = req.body;
    data.updateDate = new Date().toISOString();
    Goals.findOneAndUpdate(
      { id: data.id },
      data,
      { new: true },
      (err, response) => {
        if (err) return res.json({ success: false, message: err.message });
        if (response) {

          // Notifications.create({
          //   userId: req.decoded.id,
          //   message: `updated a : ${Goals.goals}`,
          //   type: "goal_updated",
          //   createdAt: new Date(),
          //   metadata : Goals
          // });

          res.json({
            success: true,
            message: "Goals Information has been updated!",
            data: response,
          });
        } else {
          res.json({
            success: true,
            message: "No Goals has been modified!",
            data: response,
          });
        }
      }
    );
  });

  //**********************USer Routes ********************** */

  router.get("/getGoalsForUserDashboard/:id", async (req, res) => {
    const userId = req.params.id; // Get user ID from request parameters
    let data = [];
    try {
      let goalCount = await Goals.countDocuments({ createdBy: userId });
      let goalDeletedCount = await Goals.countDocuments({
        createdBy: userId,
        deleted: true,
      });
      let goalAmountTotal = await Goals.aggregate([
        {
          $match: { createdBy: userId }, // Match goals created by the user
        },
        {
          $group: {
            _id: null,
            totalAmount: { $sum: "$budget" },
          },
        },
      ]);

      data.push({
        goalCount: goalCount,
        goalDeletedCount: goalDeletedCount,
        totalBudget:
          goalAmountTotal.length > 0 ? goalAmountTotal[0].totalAmount : 0,
      });
      res.json({ success: true, data: data });
    } catch (error) {
      res.json({ success: false, message: error });
    }
  });

  router.get("/getObjectivesViewTable/:id", async (req, res) => {
    try {
      const data = await Goals.aggregate([
        {
          $match: {
            deleted: false,
            //createdBy: req.params.id,
          },
        },
        {
          $lookup: {
            from: "objectives",
            localField: "id",
            foreignField: "goalId",
            as: "objectives",
          },
        },
        {
          $match: {
            "objectives.deleted": false,
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "createdBy",
            foreignField: "id",
            as: "users",
          },
        },
        {
          $project: {
            _id: 1,
            id: 1,
            goals: 1,
            budget: 1,
            department: 1,
            campus: 1,
            createdBy: 1,
            deleted: 1,
            date_added: 1,
            createdAt: 1,
            goallistsId: 1,
            __v: 1,
            updatedAt: 1,
            complete: 1,
            "users.id": 1,
            "users.username": 1,
            objectivesDetails: {
              $map: {
                input: { $ifNull: ["$objectivesDetails", []] },
                as: "od",
                in: {
                  id: "$$od.id",
                  functional_objective: "$$od.functional_objective",
                  performance_indicator: "$$od.performance_indicator",
                  target: "$$od.target",
                  formula: "$$od.formula",
                  programs: "$$od.programs",
                  responsible_persons: "$$od.responsible_persons",
                  clients: "$$od.clients",
                  remarks: "$$od.remarks",
                  month_0: "$$od.month_0",
                  month_1: "$$od.month_1",
                  month_2: "$$od.month_2",
                  month_3: "$$od.month_3",
                  month_4: "$$od.month_4",
                  month_5: "$$od.month_5",
                  month_6: "$$od.month_6",
                  month_7: "$$od.month_7",
                  month_8: "$$od.month_8",
                  month_9: "$$od.month_9",
                  month_10: "$$od.month_10",
                  month_11: "$$od.month_11",
                  file_month_0: "$$od.file_month_0",
                  file_month_1: "$$od.file_month_1",
                  file_month_2: "$$od.file_month_2",
                  file_month_3: "$$od.file_month_3",
                  file_month_4: "$$od.file_month_4",
                  file_month_5: "$$od.file_month_5",
                  file_month_6: "$$od.file_month_6",
                  file_month_7: "$$od.file_month_7",
                  file_month_8: "$$od.file_month_8",
                  file_month_9: "$$od.file_month_9",
                  file_month_10: "$$od.file_month_10",
                  file_month_11: "$$od.file_month_11",
                  goal_month_0: "$$od.goal_month_0",
                  goal_month_1: "$$od.goal_month_1",
                  goal_month_2: "$$od.goal_month_2",
                  goal_month_3: "$$od.goal_month_3",
                  goal_month_4: "$$od.goal_month_4",
                  goal_month_5: "$$od.goal_month_5",
                  goal_month_6: "$$od.goal_month_6",
                  goal_month_7: "$$od.goal_month_7",
                  goal_month_8: "$$od.goal_month_8",
                  goal_month_9: "$$od.goal_month_9",
                  goal_month_10: "$$od.goal_month_10",
                  goal_month_11: "$$od.goal_month_11",
                  quarter_1: "$$od.quarter_1",
                  quarter_2: "$$od.quarter_2",
                  quarter_3: "$$od.quarter_3",
                  quarter_0: "$$od.quarter_0",
                  file_quarter_1: "$$od.file_quarter_1",
                  file_quarter_2: "$$od.file_quarter_2",
                  file_quarter_3: "$$od.file_quarter_3",
                  file_quarter_0: "$$od.file_quarter_0",
                  goal_quarter_1: "$$od.goal_quarter_1",
                  goal_quarter_2: "$$od.goal_quarter_2",
                  goal_quarter_3: "$$od.goal_quarter_3",
                  goal_quarter_0: "$$od.goal_quarter_0",
                  semi_annual_0: "$$od.semi_annual_0",
                  semi_annual_1: "$$od.semi_annual_1",
                  semi_annual_2: "$$od.semi_annual_2",
                  file_semi_annual_0: "$$od.file_semi_annual_0",
                  file_semi_annual_1: "$$od.file_semi_annual_1",
                  file_semi_annual_2: "$$od.file_semi_annual_2",
                  goal_semi_annual_0: "$$od.goal_semi_annual_0",
                  goal_semi_annual_1: "$$od.goal_semi_annual_1",
                  goal_semi_annual_2: "$$od.goal_semi_annual_2",
                  frequency_monitoring: "$$od.frequency_monitoring",
                  timetable: "$$od.timetable",
                  complete: "$$od.complete",
                  data_source: "$$od.data_source",
                  budget: "$$od.budget",
                  date_added: "$$od.date_added",
                  createdBy: "$$od.createdBy",
                  updateby: "$$od.updateby",
                  updateDate: "$$od.updateDate",
                  createdAt: "$$od.createdAt",
                  deleted: "$$od.deleted",
                  strategic_objective: "$$od.strategic_objective",
                },
              },
            },
          },
        },
      ]);
      res.json({ success: true, data: data });
    } catch (error) {
      res.json({ success: false, message: error });
    }
  });

  router.get("/getAllObjectivesWithObjectives/:office", async (req, res) => {
    const officeName = req.params.office.toLowerCase();
    let matchQuery = {
      deleted: false,
    };

    console.log("officegetAllObjectivesWithObjectives", officeName);
    let queryIds = [];
    if (officeName && officeName !== "undefined") {
      const department = await Departments.findOne({
        // department: { $regex: officeName, $options: "i" },
        department: officeName,
      }).select({ id: 1 });
      // }).select({ id: 1, firstname: 1, lastname: 1, role: 1 });

      console.log("department", department);

      const UsersData = await Users.find({
        department_id: department.id,
      });

      console.log("UsersData", UsersData);

      if (Array.isArray(UsersData)) {
        for (const user of UsersData) {
          if (user.role === "vice-president") {
            const results = await Users.find({
              vice_president_id: user.id,
            }).select({ id: 1 });
            queryIds.push(...results.map((e) => e.id), user.id);
          } else if (user.role === "director") {
            const results = await Users.find({
              director_id: user.id,
            }).select({ id: 1 });
            queryIds.push(...results.map((e) => e.id), user.id);
          } else if (user.role === "office-head") {
            const results = await Users.find({
              office_head_id: user.id,
            }).select({ id: 1 });
            queryIds.push(...results.map((e) => e.id), user.id);
          }
        }
      }
      queryIds = [...new Set(queryIds)]; // Remove duplicates

      matchQuery.createdBy = { $in: queryIds };

      if (queryIds.length === 0) {
        matchQuery = {
          deleted: false,
        };
      }

      console.log("queryIds", queryIds);
      console.log("matchQuery", matchQuery);
    }

    // // const usersUnderThisOffice = await Users.find({
    // //   $or: [{ vice_president_id: officeId }, { director_id: officeId }],
    // // }).select({ id: true, firstname: true, lastname: true });
    // const usersUnderThisOffice = await Users.find({
    //   $or: [{ vice_president_id: officeId }, { director_id: officeId }],
    // }).select({ id: 1, firstname: 1, lastname: 1 });

    // Extract the array of user ids
    // const userIds = usersUnderThisOffice.map((user) => user.id);
    // queryIds.push(userIds);

    Goals.aggregate(
      [
        {
          $match: matchQuery,
        },
        {
          $lookup: {
            from: "objectives",
            let: { objectiveIds: { $ifNull: ["$objectives", []] } },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $in: ["$id", { $ifNull: ["$$objectiveIds", []] }] },
                      { $eq: ["$deleted", false] },
                    ],
                  },
                },
              },
            ],
            as: "objectivesDetails",
          },
        },
        {
          $lookup: {
            as: "users",
            from: "users",
            foreignField: "id",
            localField: "createdBy",
          },
        },
        { $unwind: { path: "$users" } },
        {
          $addFields: {
            objectivesDetails: {
              $cond: {
                if: { $eq: ["$objectivesDetails", []] },
                then: null,
                else: "$objectivesDetails",
              },
            },
          },
        },
        {
          $project: {
            _id: 1,
            id: 1,
            goals: 1,
            budget: 1,
            department: 1,
            campus: 1,
            createdBy: 1,
            deleted: 1,
            date_added: 1,
            createdAt: 1,
            goallistsId: 1,
            __v: 1,
            updatedAt: 1,
            complete: 1,
            "users.id": 1,
            "users.username": 1,
            "users.firstname": 1,
            "users.lastname": 1,
            "users.role": 1,
            "users.email": 1,
            "users.profile_pic": 1,
            "users.department": 1,
            objectivesDetails: {
              $map: {
                input: { $ifNull: ["$objectivesDetails", []] },
                as: "od",
                in: {
                  id: "$$od.id",
                  functional_objective: "$$od.functional_objective",
                  performance_indicator: "$$od.performance_indicator",
                  target: "$$od.target",
                  formula: "$$od.formula",
                  programs: "$$od.programs",
                  responsible_persons: "$$od.responsible_persons",
                  clients: "$$od.clients",
                  remarks: "$$od.remarks",
                  month_0: "$$od.month_0",
                  month_1: "$$od.month_1",
                  month_2: "$$od.month_2",
                  month_3: "$$od.month_3",
                  month_4: "$$od.month_4",
                  month_5: "$$od.month_5",
                  month_6: "$$od.month_6",
                  month_7: "$$od.month_7",
                  month_8: "$$od.month_8",
                  month_9: "$$od.month_9",
                  month_10: "$$od.month_10",
                  month_11: "$$od.month_11",
                  file_month_0: "$$od.file_month_0",
                  file_month_1: "$$od.file_month_1",
                  file_month_2: "$$od.file_month_2",
                  file_month_3: "$$od.file_month_3",
                  file_month_4: "$$od.file_month_4",
                  file_month_5: "$$od.file_month_5",
                  file_month_6: "$$od.file_month_6",
                  file_month_7: "$$od.file_month_7",
                  file_month_8: "$$od.file_month_8",
                  file_month_9: "$$od.file_month_9",
                  file_month_10: "$$od.file_month_10",
                  file_month_11: "$$od.file_month_11",
                  goal_month_0: "$$od.goal_month_0",
                  goal_month_1: "$$od.goal_month_1",
                  goal_month_2: "$$od.goal_month_2",
                  goal_month_3: "$$od.goal_month_3",
                  goal_month_4: "$$od.goal_month_4",
                  goal_month_5: "$$od.goal_month_5",
                  goal_month_6: "$$od.goal_month_6",
                  goal_month_7: "$$od.goal_month_7",
                  goal_month_8: "$$od.goal_month_8",
                  goal_month_9: "$$od.goal_month_9",
                  goal_month_10: "$$od.goal_month_10",
                  goal_month_11: "$$od.goal_month_11",
                  quarter_1: "$$od.quarter_1",
                  quarter_2: "$$od.quarter_2",
                  quarter_3: "$$od.quarter_3",
                  quarter_0: "$$od.quarter_0",
                  file_quarter_1: "$$od.file_quarter_1",
                  file_quarter_2: "$$od.file_quarter_2",
                  file_quarter_3: "$$od.file_quarter_3",
                  file_quarter_0: "$$od.file_quarter_0",
                  goal_quarter_1: "$$od.goal_quarter_1",
                  goal_quarter_2: "$$od.goal_quarter_2",
                  goal_quarter_3: "$$od.goal_quarter_3",
                  goal_quarter_0: "$$od.goal_quarter_0",
                  semi_annual_0: "$$od.semi_annual_0",
                  semi_annual_1: "$$od.semi_annual_1",
                  semi_annual_2: "$$od.semi_annual_2",
                  file_semi_annual_0: "$$od.file_semi_annual_0",
                  file_semi_annual_1: "$$od.file_semi_annual_1",
                  file_semi_annual_2: "$$od.file_semi_annual_2",
                  goal_semi_annual_0: "$$od.goal_semi_annual_0",
                  goal_semi_annual_1: "$$od.goal_semi_annual_1",
                  goal_semi_annual_2: "$$od.goal_semi_annual_2",
                  frequency_monitoring: "$$od.frequency_monitoring",
                  timetable: "$$od.timetable",
                  complete: "$$od.complete",
                  data_source: "$$od.data_source",
                  budget: "$$od.budget",
                  date_added: "$$od.date_added",
                  createdBy: "$$od.createdBy",
                  updateby: "$$od.updateby",
                  updateDate: "$$od.updateDate",
                  createdAt: "$$od.createdAt",
                  deleted: "$$od.deleted",
                },
              },
            },
          },
        },
      ],
      { allowDiskUse: true },
      async (err, Goals) => {
        // Check if error was found or not
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!Goals || Goals.length === 0) {
            res.json({
              success: false,
              message: "No Goals found.",
              Goals: [],
            }); // Return error of no blogs found
          } else {
            res.json({
              success: true,
              GOAL: Goals,
              goals: await CalculateBudgetAndCompletion(Goals),
              office_dropdown: await getBarChartsData(Goals),
            }); // Return success and blogs array
          }
        }
      }
    ).sort({ _id: -1 });
  });

  // router.get("/getAllObjectivesUnderADirector/:id", async (req, res) => {
  //   const directorId = req.params.id;
  //   const usersUnderThisDirector = await Users.find({
  //     director_id: directorId,
  //   }).select({ id: true });

  //   // Extract the array of user ids
  //   const userIds = usersUnderThisDirector.map((user) => user.id);
  //   Goals.aggregate(
  //     [
  //       {
  //         $match: {
  //           deleted: false,
  //           createdBy: {
  //             $in: userIds,
  //           },
  //         },
  //       },
  //       {
  //         $lookup: {
  //           from: "objectives",
  //           let: { objectiveIds: { $ifNull: ["$objectives", []] } },
  //           pipeline: [
  //             {
  //               $match: {
  //                 $expr: {
  //                   $and: [
  //                     { $in: ["$id", { $ifNull: ["$$objectiveIds", []] }] },
  //                     { $eq: ["$deleted", false] },
  //                   ],
  //                 },
  //               },
  //             },
  //           ],
  //           as: "objectivesDetails",
  //         },
  //       },
  //       {
  //         $lookup: {
  //           as: "users",
  //           from: "users",
  //           foreignField: "id",
  //           localField: "createdBy",
  //         },
  //       },
  //       { $unwind: { path: "$users" } },
  //       {
  //         $addFields: {
  //           objectivesDetails: {
  //             $cond: {
  //               if: { $eq: ["$objectivesDetails", []] },
  //               then: null,
  //               else: "$objectivesDetails",
  //             },
  //           },
  //         },
  //       },
  //       {
  //         $project: {
  //           _id: 1,
  //           id: 1,
  //           goals: 1,
  //           budget: 1,
  //           department: 1,
  //           campus: 1,
  //           createdBy: 1,
  //           deleted: 1,
  //           date_added: 1,
  //           createdAt: 1,
  //           goallistsId: 1,
  //           __v: 1,
  //           updatedAt: 1,
  //           complete: 1,
  //           "users.id": 1,
  //           "users.username": 1,
  //           objectivesDetails: {
  //             $map: {
  //               input: { $ifNull: ["$objectivesDetails", []] },
  //               as: "od",
  //               in: {
  //                 id: "$$od.id",
  //                 functional_objective: "$$od.functional_objective",
  //                 performance_indicator: "$$od.performance_indicator",
  //                 target: "$$od.target",
  //                 formula: "$$od.formula",
  //                 programs: "$$od.programs",
  //                 responsible_persons: "$$od.responsible_persons",
  //                 clients: "$$od.clients",
  //                 remarks: "$$od.remarks",
  //                 month_0: "$$od.month_0",
  //                 month_1: "$$od.month_1",
  //                 month_2: "$$od.month_2",
  //                 month_3: "$$od.month_3",
  //                 month_4: "$$od.month_4",
  //                 month_5: "$$od.month_5",
  //                 month_6: "$$od.month_6",
  //                 month_7: "$$od.month_7",
  //                 month_8: "$$od.month_8",
  //                 month_9: "$$od.month_9",
  //                 month_10: "$$od.month_10",
  //                 month_11: "$$od.month_11",
  //                 file_month_0: "$$od.file_month_0",
  //                 file_month_1: "$$od.file_month_1",
  //                 file_month_2: "$$od.file_month_2",
  //                 file_month_3: "$$od.file_month_3",
  //                 file_month_4: "$$od.file_month_4",
  //                 file_month_5: "$$od.file_month_5",
  //                 file_month_6: "$$od.file_month_6",
  //                 file_month_7: "$$od.file_month_7",
  //                 file_month_8: "$$od.file_month_8",
  //                 file_month_9: "$$od.file_month_9",
  //                 file_month_10: "$$od.file_month_10",
  //                 file_month_11: "$$od.file_month_11",
  //                 goal_month_0: "$$od.goal_month_0",
  //                 goal_month_1: "$$od.goal_month_1",
  //                 goal_month_2: "$$od.goal_month_2",
  //                 goal_month_3: "$$od.goal_month_3",
  //                 goal_month_4: "$$od.goal_month_4",
  //                 goal_month_5: "$$od.goal_month_5",
  //                 goal_month_6: "$$od.goal_month_6",
  //                 goal_month_7: "$$od.goal_month_7",
  //                 goal_month_8: "$$od.goal_month_8",
  //                 goal_month_9: "$$od.goal_month_9",
  //                 goal_month_10: "$$od.goal_month_10",
  //                 goal_month_11: "$$od.goal_month_11",
  //                 quarter_1: "$$od.quarter_1",
  //                 quarter_2: "$$od.quarter_2",
  //                 quarter_3: "$$od.quarter_3",
  //                 quarter_0: "$$od.quarter_0",
  //                 file_quarter_1: "$$od.file_quarter_1",
  //                 file_quarter_2: "$$od.file_quarter_2",
  //                 file_quarter_3: "$$od.file_quarter_3",
  //                 file_quarter_0: "$$od.file_quarter_0",
  //                 goal_quarter_1: "$$od.goal_quarter_1",
  //                 goal_quarter_2: "$$od.goal_quarter_2",
  //                 goal_quarter_3: "$$od.goal_quarter_3",
  //                 goal_quarter_0: "$$od.goal_quarter_0",
  //                 semi_annual_0: "$$od.semi_annual_0",
  //                 semi_annual_1: "$$od.semi_annual_1",
  //                 semi_annual_2: "$$od.semi_annual_2",
  //                 file_semi_annual_0: "$$od.file_semi_annual_0",
  //                 file_semi_annual_1: "$$od.file_semi_annual_1",
  //                 file_semi_annual_2: "$$od.file_semi_annual_2",
  //                 goal_semi_annual_0: "$$od.goal_semi_annual_0",
  //                 goal_semi_annual_1: "$$od.goal_semi_annual_1",
  //                 goal_semi_annual_2: "$$od.goal_semi_annual_2",
  //                 frequency_monitoring: "$$od.frequency_monitoring",
  //                 timetable: "$$od.timetable",
  //                 complete: "$$od.complete",
  //                 data_source: "$$od.data_source",
  //                 budget: "$$od.budget",
  //                 date_added: "$$od.date_added",
  //                 createdBy: "$$od.createdBy",
  //                 updateby: "$$od.updateby",
  //                 updateDate: "$$od.updateDate",
  //                 createdAt: "$$od.createdAt",
  //                 deleted: "$$od.deleted",
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ],
  //     { allowDiskUse: true },
  //     async (err, Goals) => {
  //       if (err) {
  //         res.json({ success: false, message: err });
  //       } else {
  //         if (!Goals || Goals.length === 0) {
  //           res.json({
  //             success: false,
  //             message: "No Goals found.",
  //             Goals: [],
  //           });
  //         } else {
  //           let returnedData = await Promise.all(
  //             await CalculateBudgetAndCompletion(Goals)
  //           );
  //           res.json({ success: true, goals: returnedData });
  //         }
  //       }
  //     }
  //   ).sort({ _id: -1 });
  // });

  // router.get("/getAllObjectivesWithObjectives/:id", (req, res) => {
  //   Goals.aggregate(
  //     [
  //       {
  //         $match: {
  //           deleted: false,
  //           createdBy: req.params.id,
  //         },
  //       },
  //       {
  //         $lookup: {
  //           from: "objectives",
  //           let: { objectiveIds: { $ifNull: ["$objectives", []] } },
  //           pipeline: [
  //             {
  //               $match: {
  //                 $expr: {
  //                   $and: [
  //                     { $in: ["$id", "$$objectiveIds"] },
  //                     { $eq: ["$deleted", false] },
  //                   ],
  //                 },
  //               },
  //             },
  //           ],
  //           as: "objectivesDetails",
  //         },
  //       },
  //       {
  //         $lookup: {
  //           as: "users",
  //           from: "users",
  //           foreignField: "id",
  //           localField: "createdBy",
  //         },
  //       },
  //       { $unwind: { path: "$users" } },
  //       {
  //         $addFields: {
  //           objectivesDetails: {
  //             $cond: {
  //               if: { $eq: ["$objectivesDetails", []] },
  //               then: null,
  //               else: "$objectivesDetails",
  //             },
  //           },
  //         },
  //       },
  //       {
  //         $project: {
  //           _id: 1,
  //           id: 1,
  //           goals: 1,
  //           budget: 1,
  //           department: 1,
  //           campus: 1,
  //           createdBy: 1,
  //           deleted: 1,
  //           date_added: 1,
  //           createdAt: 1,
  //           goallistsId: 1,
  //           __v: 1,
  //           updatedAt: 1,
  //           complete: 1,
  //           "users.id": 1,
  //           "users.username": 1,
  //           objectivesDetails: {
  //             $cond: {
  //               if: { $eq: ["$objectivesDetails", null] },
  //               then: null,
  //               else: {
  //                 $map: {
  //                   input: "$objectivesDetails",
  //                   as: "od",
  //                   in: {
  //                     id: "$$od.id",
  //                     functional_objective: "$$od.functional_objective",
  //                     performance_indicator: "$$od.performance_indicator",
  //                     target: "$$od.target",
  //                     formula: "$$od.formula",
  //                     programs: "$$od.programs",
  //                     responsible_persons: "$$od.responsible_persons",
  //                     clients: "$$od.clients",
  //                     remarks: "$$od.remarks",
  //                     month_0: "$$od.month_0",
  //                     month_1: "$$od.month_1",
  //                     month_2: "$$od.month_2",
  //                     month_3: "$$od.month_3",
  //                     month_4: "$$od.month_4",
  //                     month_5: "$$od.month_5",
  //                     month_6: "$$od.month_6",
  //                     month_7: "$$od.month_7",
  //                     month_8: "$$od.month_8",
  //                     month_9: "$$od.month_9",
  //                     month_10: "$$od.month_10",
  //                     month_11: "$$od.month_11",
  //                     file_month_0: "$$od.file_month_0",
  //                     file_month_1: "$$od.file_month_1",
  //                     file_month_2: "$$od.file_month_2",
  //                     file_month_3: "$$od.file_month_3",
  //                     file_month_4: "$$od.file_month_4",
  //                     file_month_5: "$$od.file_month_5",
  //                     file_month_6: "$$od.file_month_6",
  //                     file_month_7: "$$od.file_month_7",
  //                     file_month_8: "$$od.file_month_8",
  //                     file_month_9: "$$od.file_month_9",
  //                     file_month_10: "$$od.file_month_10",
  //                     file_month_11: "$$od.file_month_11",

  //                     goal_month_0: "$$od.goal_month_0",
  //                     goal_month_1: "$$od.goal_month_1",
  //                     goal_month_2: "$$od.goal_month_2",
  //                     goal_month_3: "$$od.goal_month_3",
  //                     goal_month_4: "$$od.goal_month_4",
  //                     goal_month_5: "$$od.goal_month_5",
  //                     goal_month_6: "$$od.goal_month_6",
  //                     goal_month_7: "$$od.goal_month_7",
  //                     goal_month_8: "$$od.goal_month_8",
  //                     goal_month_9: "$$od.goal_month_9",
  //                     goal_month_10: "$$od.goal_month_10",
  //                     goal_month_11: "$$od.goal_month_11",

  //                     quarter_1: "$$od.quarter_1",
  //                     quarter_2: "$$od.quarter_2",
  //                     quarter_3: "$$od.quarter_3",
  //                     quarter_0: "$$od.quarter_0",

  //                     file_quarter_1: "$$od.file_quarter_1",
  //                     file_quarter_2: "$$od.file_quarter_2",
  //                     file_quarter_3: "$$od.file_quarter_3",
  //                     file_quarter_0: "$$od.file_quarter_0",

  //                     goal_quarter_1: "$$od.goal_quarter_1",
  //                     goal_quarter_2: "$$od.goal_quarter_2",
  //                     goal_quarter_3: "$$od.goal_quarter_3",
  //                     goal_quarter_0: "$$od.goal_quarter_0",

  //                     semi_annual_0: "$$od.semi_annual_0",
  //                     semi_annual_1: "$$od.semi_annual_1",
  //                     semi_annual_2: "$$od.semi_annual_2",

  //                     file_semi_annual_0: "$$od.file_semi_annual_0",
  //                     file_semi_annual_1: "$$od.file_semi_annual_1",
  //                     file_semi_annual_2: "$$od.file_semi_annual_2",

  //                     goal_semi_annual_0: "$$od.goal_semi_annual_0",
  //                     goal_semi_annual_1: "$$od.goal_semi_annual_1",
  //                     goal_semi_annual_2: "$$od.goal_semi_annual_2",

  //                     frequency_monitoring: "$$od.frequency_monitoring",
  //                     timetable: "$$od.timetable",
  //                     complete: "$$od.complete",
  //                     data_source: "$$od.data_source",
  //                     budget: "$$od.budget",
  //                     date_added: "$$od.date_added",
  //                     createdBy: "$$od.createdBy",
  //                     updateby: "$$od.updateby",
  //                     updateDate: "$$od.updateDate",
  //                     createdAt: "$$od.createdAt",
  //                     deleted: "$$od.deleted",
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       },
  //     ],
  //     { allowDiskUse: true },
  //     async (err, Goals) => {
  //       // Check if error was found or not
  //       if (err) {
  //         res.json({ success: false, message: err });
  //       } else {
  //         if (!Goals || Goals.length === 0) {
  //           res.json({
  //             success: false,
  //             message: "No Goals found.",
  //             Goals: [],
  //           }); // Return error of no blogs found
  //         } else {
  //           let returnedData = await Promise.all(
  //             await CalculateBudgetAndCompletion(Goals)
  //           );
  //           res.json({ success: true, goals: returnedData }); // Return success and blogs array
  //         }
  //       }
  //     }
  //   ).sort({ _id: -1 });

  //   // ).sort({ _id: -1 }); // Sort blogs from newest to oldest
  // });

  router.get("/getGoalsForDashboard/:id", async (req, res) => {
    let data = [];
    try {
      let goalCount = await Goals.countDocuments({ createdBy: req.params.id });
      let goalDeletedCount = await Goals.countDocuments({
        createdBy: req.params.id,
        deleted: true,
      });
      let goalAmountTotal = await Goals.aggregate([
        {
          $match: {
            createdBy: req.params.id,
          },
        },
        {
          $group: {
            _id: null,
            totalAmount: { $sum: "$budget" },
          },
        },
      ]);
      data.push({
        goalCount: goalCount,
        goalDeletedCount: goalDeletedCount,
        totalBudget: goalAmountTotal,
      });
      res.status(200).json({ success: true, data: data });
    } catch (error) {
      res.json({ success: false, message: error });
    }
  });

  return router;
};
