/**
 * @fileoverview This file contains the routes for querying goals and files related to a director.
 *
 * @requires ../models/goals
 * @requires ../models/user
 *
 * @param {Object} router - The router object to define routes.
 *
 * @route GET /getAllObjectivesUnderAOfficeHead/:id
 * @param {string} req.params.id - The ID of the director.
 * @returns {Object} res - The response object containing the goals and their details.
 *
 * @function CalculateBudgetAndCompletion
 * @param {Array} data - The array of goals data.
 * @returns {Promise<Array>} - The array of goals with calculated budget and completion.
 *
 * @function formatIsoDate
 * @param {string} isoDateString - The ISO date string to format.
 * @returns {string} - The formatted date string in YYYY-MM-DD format.
 *
 * @route GET /getAllFilesFromObjective/:user_id/:objective_id
 * @param {string} req.params.user_id - The ID of the user.
 * @param {string} req.params.objective_id - The ID of the objective.
 * @returns {Object} res - The response object containing the files related to the objective.
 *
 * @route GET /getAllFilesHistoryFromObjectiveLoad/:user_id/:objective_id
 * @param {string} req.params.user_id - The ID of the user.
 * @param {string} req.params.objective_id - The ID of the objective.
 * @returns {Object} res - The response object containing the files history related to the objective.
 */
const Goals = require("../models/goals");
const Users = require("../models/user");
const File = require("../models/fileupload");

module.exports = (router) => {
  router.get("/getGoalsForDashboardOfficeHead/:id", async (req, res) => {
    let data = [];
    try {
      const DrId = req.params.id;
      const usersUnderThisVicePresident = await Users.find({
        director_id: DrId,
      }).select({ id: true, firstname: true, lastname: true });
      // Extract the array of user ids
      const userIds = usersUnderThisVicePresident.map((user) => user.id);
      userIds.push(DrId);

      let goalCount = await Goals.countDocuments({
        deleted: false,
        createdBy: {
          $in: userIds,
        },
      });
      let goalDeletedCount = await Goals.countDocuments({
        createdBy: {
          $in: userIds,
        },
        deleted: true,
      });
      let goalAmountTotal = await Goals.aggregate([
        {
          $match: {
            deleted: false,
            createdBy: {
              $in: userIds,
            },
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

  router.get("/getObjectivesViewTableOfficeHead/:id", async (req, res) => {
    const DrId = req.params.id;
    const usersUnderThisVicePresident = await Users.find({
      director_id: DrId,
    }).select({ id: true, firstname: true, lastname: true });
    // Extract the array of user ids
    const userIds = usersUnderThisVicePresident.map((user) => user.id);
    userIds.push(DrId);

    await Goals.aggregate(
      [
        {
          $match: {
            deleted: false,
            createdBy: {
              $in: userIds,
            },
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
  });

  router.get("/getAllObjectivesUnderAOfficeHead/:id", async (req, res) => {
    const directorId = req.params.id;
    const usersUnderThisOfficeHead = await Users.find({
      director_id: directorId,
    }).select({ id: true, _id: false });

    // Extract the array of user ids
    const userIds = usersUnderThisOfficeHead.map((user) => user.id);
    userIds.push(directorId);

    Goals.aggregate(
      [
        {
          $match: {
            deleted: false,
            createdBy: {
              $in: userIds,
            },
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
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!Goals || Goals.length === 0) {
            res.json({
              success: false,
              message: "No Goals found.",
              Goals: [],
            });
          } else {
            // let returnedData = await Promise.all(
            //   await CalculateBudgetAndCompletion(Goals)
            // );
            res.json({
              success: true,
              goals: await CalculateBudgetAndCompletion(Goals),
              dropdown: await GetAllDepartmentDropdown(Goals),
            });
          }
        }
      }
    ).sort({ _id: -1 });
  });

  router.get("/getAllUsersForDashboardOfficeHead/:id", async (req, res) => {
    try {
      let directorCount = await Users.countDocuments({
        deleted: false,
        role: "director",
        vice_president_id: req.params.id,
      });

      let officeHeadCount = await Users.countDocuments({
        deleted: false,
        role: "office-head",
        vice_president_id: req.params.id,
      });

      let documentCount = await Users.countDocuments({
        deleted: false,
        vice_president_id: req.params.id,
      });
      res.status(200).json({
        success: true,
        data: {
          director: directorCount,
          office_head: officeHeadCount,
          document: documentCount,
        },
      });
      // res.status(200).json({ success: true, data: "yolo" });
    } catch (error) {
      res.status(404).json({ success: false, message: error });
    }
  });

  router.get("/getAllObjectivesUnderAOfficeHeadV2/:id", async (req, res) => {
    const DrID = req.params.id;
    const usersUnderThisOfficeHead = await Users.find({
      director_id: DrID,
    }).select({ id: true, firstname: true, lastname: true });

    // Extract the array of user ids
    const userIds = usersUnderThisOfficeHead.map((user) => user.id);
    userIds.push(DrID);

    Goals.aggregate(
      [
        {
          $match: {
            deleted: false,
            createdBy: {
              $in: userIds,
            },
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
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!Goals || Goals.length === 0) {
            res.json({
              success: false,
              message: "No Goals found.",
              Goals: [],
            });
          } else {
            // let returnedData = await Promise.all(
            //   await CalculateBudgetAndCompletion(Goals),
            //   await GetAllDepartmentDropdown(Goals)
            // );
            const calculatedGoals = await CalculateBudgetAndCompletion(Goals);
            const departmentDropdown = await GetAllDepartmentDropdown(Goals);
            const objectiveCompletions = await calculateCompletionPercentage(
              Goals
            );

            const completedGoals = Goals.filter(
              (goal) =>
                goal.objectivesDetails &&
                goal.objectivesDetails.some((e) => e.complete)
            ).length;

            const completeObjectivesCount = Goals.reduce((count, goal) => {
              if (goal.objectivesDetails) {
                const incompleteCount = goal.objectivesDetails.filter(
                  (e) => e.complete
                ).length;
                return count + incompleteCount;
              }
              return count;
            }, 0);

            const incompleteObjectivesCount = Goals.reduce((count, goal) => {
              if (goal.objectivesDetails) {
                const incompleteCount = goal.objectivesDetails.filter(
                  (e) => !e.complete
                ).length;
                return count + incompleteCount;
              }
              return count;
            }, 0);
            const goalCompleted = Goals.filter(
              (goal) => goal.completion_percentage === 100
            ).length;
            const goalunCompleted = Goals.filter(
              (goal) => goal.completion_percentage !== 100
            ).length;

            res.json({
              success: true,
              goals: calculatedGoals,
              objectiveCompletions: objectiveCompletions,
              completedGoals: goalCompleted,
              uncompletedGoals: goalunCompleted,
              dropdown: departmentDropdown,
              completeObjectivesCount: completeObjectivesCount,
              incompleteObjectivesCount: incompleteObjectivesCount,
            });
          }
        }
      }
    ).sort({ _id: -1 });
  });

  async function calculateCompletionPercentage(goals) {
    return goals.map((goal) => {
      goal.objectivesDetails = goal.objectivesDetails.map((objective) => {
        let actualSum = 0;

        if (objective.frequency_monitoring === "monthly") {
          for (let i = 0; i < 12; i++) {
            actualSum += objective[`month_${i}`] || 0;
          }
        } else if (objective.frequency_monitoring === "yearly") {
          for (let i = 0; i < 1; i++) {
            actualSum += objective[`yearly_${i}`] || 0;
          }
        } else if (objective.frequency_monitoring === "quarterly") {
          for (let i = 0; i < 4; i++) {
            actualSum += objective[`quarter_${i}`] || 0;
          }
        } else if (objective.frequency_monitoring === "semi_annual") {
          for (let i = 0; i < 2; i++) {
            actualSum += objective[`semi_annual_${i}`] || 0;
          }
        }
        const completionPercentage = (actualSum / objective.target) * 100;
        return {
          ...objective,
          completion_percentage: completionPercentage,
        };
      });

      return goal;
    });
  }

  async function GetAllDepartmentDropdown(data) {
    let departmentDropdown = [];
    let departmentSet = new Set();

    data.forEach((e) => {
      if (!departmentSet.has(e.department)) {
        departmentSet.add(e.department);
        departmentDropdown.push({
          name: e.department.replace(/\b\w/g, (char) => char.toUpperCase()),
          code: e.department,
        });
      }
    });

    return departmentDropdown;
  }

  async function CalculateBudgetAndCompletion(data) {
    return await Promise.all(
      data.map(async (goal) => {
        // Calculate percentage and remaining
        let totalObjectiveBudget = 0;
        goal.remainingBudget = goal.budget;
        // Calculate completed goals percentage
        let totalCompletion = 0;
        let totalObjectives = 0;

        if (goal.objectivesDetails !== null) {
          for (let e of goal.objectivesDetails) {
            // Calculate percentage and remaining
            // goal.remainingBudget -= e.budget;
            totalObjectiveBudget += e.budget;

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
          goal.budgetMinusAllObjectiveBudget = totalObjectiveBudget;
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
  //   return await Promise.all(
  //     data.map(async (goal) => {
  //       // Calculate percentage and remaining
  //       let totalObjectiveBudget = 0;
  //       goal.remainingBudget = goal.budget;

  //       // Calculate completed goals percentage
  //       let totalCompletion = 0;
  //       let totalObjectives = 0;

  //       if (goal.objectivesDetails !== null) {
  //         for (let e of goal.objectivesDetails) {
  //           // Calculate percentage and remaining
  //           goal.remainingBudget -= e.budget;
  //           totalObjectiveBudget += e.budget;

  //           // Calculate completed goals percentage
  //           let objectiveCompletion = 0;
  //           let count = 0;
  //           let goalSum = 0;

  //           if (e.frequency_monitoring === "monthly") {
  //             for (let i = 0; i < 12; i++) {
  //               const key = `month_${i}`;
  //               if (e[key] !== undefined) {
  //                 goalSum += e[key];
  //                 count++;
  //               }
  //             }
  //           } else if (e.frequency_monitoring === "quarterly") {
  //             for (let i = 0; i < 4; i++) {
  //               const key = `quarter_${i}`;
  //               if (e[key] !== undefined) {
  //                 goalSum += e[key];
  //                 count++;
  //               }
  //             }
  //           } else if (e.frequency_monitoring === "semi_annual") {
  //             for (let i = 0; i < 2; i++) {
  //               const key = `semi_annual_${i}`;
  //               if (e[key] !== undefined) {
  //                 goalSum += e[key];
  //                 count++;
  //               }
  //             }
  //           }

  //           if (count > 0) {
  //             objectiveCompletion = (goalSum / e.target) * 100;
  //             totalCompletion += objectiveCompletion;
  //             totalObjectives++;
  //           }

  //           // Add complete key to each objective
  //           e.complete = goalSum === e.target;
  //         }

  //         // Calculate percentage and remaining
  //         goal.budgetMinusAllObjectiveBudget = totalObjectiveBudget;
  //         goal.remainingPercentage = (
  //           (goal.budgetMinusAllObjectiveBudget / goal.budget) *
  //           100
  //         ).toFixed(2);

  //         goal.searchDate = await formatIsoDate(goal.createdAt);

  //         // Add completion percentage to the root of the goal
  //         if (totalObjectives > 0) {
  //           goal.completion_percentage = Math.round(
  //             totalCompletion / totalObjectives
  //           );
  //         } else {
  //           goal.completion_percentage = 0;
  //         }
  //         // Add complete key based on completion percentage
  //         goal.complete = goal.completion_percentage === 100;
  //       }
  //       return goal;
  //     })
  //   );
  // }

  async function formatIsoDate(isoDateString) {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  /*
FILES QUERY API
*/
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

  router.get(
    "/getAllObjectivesWithObjectivesTableOfficeHead/:id",
    (req, res) => {
      Goals.aggregate(
        [
          {
            $match: {
              deleted: false,
              createdBy: req.params.id,
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
          if (err) {
            res.json({ success: false, message: err });
          } else {
            if (!Goals || Goals.length === 0) {
              res.json({
                success: false,
                message: "No Goals found.",
                Goals: [],
              });
            } else {
              let returnedData = await Promise.all(
                await CalculateBudgetAndCompletion(Goals)
              );
              res.json({ success: true, goals: returnedData });
            }
          }
        }
      ).sort({ _id: -1 });
    }
  );

  router.get(
    "/getAllObjectivesWithObjectivesOfficeHead/:id",
    async (req, res) => {
      const officeName = req.params.id.toLowerCase();
      let matchQuery = {
        deleted: false,
      };

      let queryIds = [];
      if (officeName && officeName !== "undefined") {
        const department = await Users.findOne({
          // department: { $regex: officeName, $options: "i" },
          department: officeName,
        }).select({ id: 1, firstname: 1, lastname: 1, role: 1 });

        if (department?.role === "vice-president") {
          const results = await Users.find({
            vice_president_id: department.id,
          }).select({ id: true, firstname: true, lastname: true });
          queryIds = results.map((e) => e.id);
          queryIds.push(department.id || "");
        } else if (department?.role === "director") {
          const results = await Users.find({
            director_id: department.id,
          }).select({ id: true, firstname: true, lastname: true });
          queryIds = results.map((e) => e.id);
          queryIds.push(department.id || "");
        } else {
          if (department) {
            queryIds.push(department.id || "");
          }
        }
        matchQuery.createdBy = { $in: queryIds };
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
                goals: await CalculateBudgetAndCompletion(Goals),
                office_dropdown: await getBarChartsData(Goals),
              }); // Return success and blogs array
            }
          }
        }
      ).sort({ _id: -1 });
    }
  );

  router.get(
    "/getAllObjectivesWithObjectivesForOfficeHead/:id",
    async (req, res) => {
      Goals.aggregate(
        [
          {
            $match: {
              deleted: false,
              createdBy: req.params.id,
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
                goals: await CalculateBudgetAndCompletion(Goals),
                office_dropdown: await getBarChartsData(Goals),
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

  //needed
  return router;
};
