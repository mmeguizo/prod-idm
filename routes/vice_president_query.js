/**
 * @module vice_president_query
 * @description This module defines routes related to querying objectives and files under a Vice President.
 *
 * @param {Object} router - Express router object.
 *
 * @route GET /getAllObjectivesUnderAVicePresident/:id
 * @description Retrieves all objectives under a specific Vice President.
 * @param {string} req.params.id - The ID of the Vice President.
 * @returns {Object} JSON response containing success status and goals data.
 *
 * @function CalculateBudgetAndCompletion
 * @description Calculates the budget and completion percentage for each goal.
 * @param {Array} data - Array of goal objects.
 * @returns {Array} Array of goal objects with calculated budget and completion percentage.
 *
 * @function formatIsoDate
 * @description Formats an ISO date string to 'YYYY-MM-DD' format.
 * @param {string} isoDateString - The ISO date string to format.
 * @returns {string} Formatted date string.
 *
 * @route GET /getAllFilesFromObjective/:user_id/:objective_id
 * @description Retrieves all files related to a specific objective.
 * @param {string} req.params.user_id - The ID of the user.
 * @param {string} req.params.objective_id - The ID of the objective.
 * @returns {Object} JSON response containing success status and files data.
 *
 * @route GET /getAllFilesHistoryFromObjectiveLoad/:user_id/:objective_id
 * @description Retrieves the history of all files related to a specific objective.
 * @param {string} req.params.user_id - The ID of the user.
 * @param {string} req.params.objective_id - The ID of the objective.
 * @returns {Object} JSON response containing success status and files history data.
 */
const { first } = require("rxjs");
const Goals = require("../models/goals");
const Users = require("../models/user");
const File = require("../models/fileupload");
const Departments = require("../models/department");
const Notifications = require("../models/notifications");

module.exports = (router) => {
  router.get("/getGoalsForDashboardVicePresident/:id", async (req, res) => {
    let data = [];
    try {
      const VPId = req.params.id;
      const usersUnderThisVicePresident = await Users.find({
        vice_president_id: VPId,
      }).select({ id: true, firstname: true, lastname: true });
      // Extract the array of user ids
      const userIds = usersUnderThisVicePresident.map((user) => user.id);
      userIds.push(VPId);

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

  router.get("/getObjectivesViewTableVicePresident/:id", async (req, res) => {
    const VPId = req.params.id;
    const usersUnderThisVicePresident = await Users.find({
      vice_president_id: VPId,
    }).select({ id: true, firstname: true, lastname: true });
    // Extract the array of user ids
    const userIds = usersUnderThisVicePresident.map((user) => user.id);
    userIds.push(VPId);

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

  router.get("/getAllUsersForDashboardVP/:id", async (req, res) => {
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

  router.get("/getAllObjectivesUnderAVicePresident/:id", async (req, res) => {
    const VPId = req.params.id;
    const usersUnderThisVicePresident = await Users.find({
      vice_president_id: VPId,
    }).select({ id: true, firstname: true, lastname: true });

    // Extract the array of user ids
    const userIds = usersUnderThisVicePresident.map((user) => user.id);
    userIds.push(VPId);

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
            const completedGoals = Goals.filter(
              (goal) =>
                goal.objectivesDetails &&
                goal.objectivesDetails.some((e) => e.complete)
            ).length;

            const incompleteGoals = Goals.filter(
              (goal) =>
                goal.objectivesDetails &&
                goal.objectivesDetails.some((e) => !e.complete)
            ).length;
            const goalCompleted = Goals.filter(
              (goal) => goal.completion_percentage === 100
            ).length;
            const goalunCompleted = Goals.filter(
              (goal) => goal.completion_percentage !== 100
            ).length;

            res.json({
              success: true,
              goals: calculatedGoals,
              completedGoals: goalCompleted,
              uncompletedGoals: goalunCompleted,
              dropdown: departmentDropdown,
              completed: completedGoals,
              Incompleted: incompleteGoals,
            });
          }
        }
      }
    ).sort({ _id: -1 });
  });

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
            goal.remainingBudget -= e.budget;
            totalObjectiveBudget += e.budget;

            // Calculate completed goals percentage
            let objectiveCompletion = 0;
            let count = 0;
            let goalSum = 0;

            if (e.frequency_monitoring === "yearly") {
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

  async function formatIsoDate(isoDateString) {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  //******************** */
  // FILES QUERY API

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
    "/getAllDepartmentDropdown/:id",

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
    "/getAllObjectivesWithObjectivesForVicePresident/:office",
    async (req, res) => {
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
        });
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
    }
  );

  router.get(
    "/getAllObjectivesWithObjectivesForVicePresidentInit/:id",
    async (req, res) => {
      const id = req.params.id.toLowerCase();
      let matchQuery = {
        deleted: false,
      };

      let queryIds = [];
      if (id && id !== "undefined") {
        const UsersData = await Users.find({
          id: id,
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

        console.log(
          "queryIdsgetAllObjectivesWithObjectivesForVicePresidentInit",
          queryIds
        );
        console.log(
          "matchQuerygetAllObjectivesWithObjectivesForVicePresidentInit",
          matchQuery
        );
      }

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
    }
  );

  // router.get(
  //   "/getAllObjectivesWithObjectivesForVicePresident/:id/:officeName",
  //   async (req, res) => {
  //     let queryIds = [];
  //     let matchQuery = {
  //       deleted: false,
  //     };

  //     const VPId = req.params.id;
  //     const usersUnderThisVicePresident = await Users.find({
  //       vice_president_id: VPId,
  //     }).select({ id: true, firstname: true, lastname: true });
  //     // Extract the array of user ids
  //     const userIds = usersUnderThisVicePresident.map((user) => user.id);
  //     //add own id
  //     queryIds = userIds;
  //     queryIds.push(VPId);

  //     matchQuery.createdBy = { $in: queryIds };
  //     const officeName = req.params.officeName.toLowerCase();
  //     if (officeName && officeName !== "undefined") {
  //       delete matchQuery.createdBy;

  //       // console.log(officeName);
  //       const department = await Users.findOne({
  //         // department: { $regex: officeName, $options: "i" },
  //         department: officeName,
  //       }).select({ id: 1, firstname: 1, lastname: 1, role: 1 });

  //       if (department?.role === "director") {
  //         // add own ids
  //         const results = await Users.find({
  //           director_id: department.id,
  //         }).select({ id: true, firstname: true, lastname: true });
  //         queryIds = results.map((e) => e.id);
  //         queryIds.push(department.id);
  //       } else if (department?.role === "office-head") {
  //         queryIds = [];
  //         delete matchQuery.createdBy;
  //         queryIds.push(department.id);
  //       }
  //       matchQuery.createdBy = { $in: queryIds };
  //     }

  //     console.log({ created: matchQuery.createdAt, queryIds, department });

  //     // // const usersUnderThisOffice = await Users.find({
  //     // //   $or: [{ vice_president_id: officeId }, { director_id: officeId }],
  //     // // }).select({ id: true, firstname: true, lastname: true });
  //     // const usersUnderThisOffice = await Users.find({
  //     //   $or: [{ vice_president_id: officeId }, { director_id: officeId }],
  //     // }).select({ id: 1, firstname: 1, lastname: 1 });

  //     // Extract the array of user ids
  //     // const userIds = usersUnderThisOffice.map((user) => user.id);
  //     // queryIds.push(userIds);

  //     Goals.aggregate(
  //       [
  //         {
  //           $match: matchQuery,
  //         },
  //         {
  //           $lookup: {
  //             from: "objectives",
  //             let: { objectiveIds: { $ifNull: ["$objectives", []] } },
  //             pipeline: [
  //               {
  //                 $match: {
  //                   $expr: {
  //                     $and: [
  //                       { $in: ["$id", { $ifNull: ["$$objectiveIds", []] }] },
  //                       { $eq: ["$deleted", false] },
  //                     ],
  //                   },
  //                 },
  //               },
  //             ],
  //             as: "objectivesDetails",
  //           },
  //         },
  //         {
  //           $lookup: {
  //             as: "users",
  //             from: "users",
  //             foreignField: "id",
  //             localField: "createdBy",
  //           },
  //         },
  //         { $unwind: { path: "$users" } },
  //         {
  //           $addFields: {
  //             objectivesDetails: {
  //               $cond: {
  //                 if: { $eq: ["$objectivesDetails", []] },
  //                 then: null,
  //                 else: "$objectivesDetails",
  //               },
  //             },
  //           },
  //         },
  //         {
  //           $project: {
  //             _id: 1,
  //             id: 1,
  //             goals: 1,
  //             budget: 1,
  //             department: 1,
  //             campus: 1,
  //             createdBy: 1,
  //             deleted: 1,
  //             date_added: 1,
  //             createdAt: 1,
  //             goallistsId: 1,
  //             __v: 1,
  //             updatedAt: 1,
  //             complete: 1,
  //             "users.id": 1,
  //             "users.username": 1,
  //             "users.firstname": 1,
  //             "users.lastname": 1,
  //             "users.role": 1,
  //             "users.email": 1,
  //             "users.profile_pic": 1,
  //             "users.department": 1,
  //             objectivesDetails: {
  //               $map: {
  //                 input: { $ifNull: ["$objectivesDetails", []] },
  //                 as: "od",
  //                 in: {
  //                   id: "$$od.id",
  //                   functional_objective: "$$od.functional_objective",
  //                   performance_indicator: "$$od.performance_indicator",
  //                   target: "$$od.target",
  //                   formula: "$$od.formula",
  //                   programs: "$$od.programs",
  //                   responsible_persons: "$$od.responsible_persons",
  //                   clients: "$$od.clients",
  //                   remarks: "$$od.remarks",
  //                   month_0: "$$od.month_0",
  //                   month_1: "$$od.month_1",
  //                   month_2: "$$od.month_2",
  //                   month_3: "$$od.month_3",
  //                   month_4: "$$od.month_4",
  //                   month_5: "$$od.month_5",
  //                   month_6: "$$od.month_6",
  //                   month_7: "$$od.month_7",
  //                   month_8: "$$od.month_8",
  //                   month_9: "$$od.month_9",
  //                   month_10: "$$od.month_10",
  //                   month_11: "$$od.month_11",
  //                   file_month_0: "$$od.file_month_0",
  //                   file_month_1: "$$od.file_month_1",
  //                   file_month_2: "$$od.file_month_2",
  //                   file_month_3: "$$od.file_month_3",
  //                   file_month_4: "$$od.file_month_4",
  //                   file_month_5: "$$od.file_month_5",
  //                   file_month_6: "$$od.file_month_6",
  //                   file_month_7: "$$od.file_month_7",
  //                   file_month_8: "$$od.file_month_8",
  //                   file_month_9: "$$od.file_month_9",
  //                   file_month_10: "$$od.file_month_10",
  //                   file_month_11: "$$od.file_month_11",
  //                   goal_month_0: "$$od.goal_month_0",
  //                   goal_month_1: "$$od.goal_month_1",
  //                   goal_month_2: "$$od.goal_month_2",
  //                   goal_month_3: "$$od.goal_month_3",
  //                   goal_month_4: "$$od.goal_month_4",
  //                   goal_month_5: "$$od.goal_month_5",
  //                   goal_month_6: "$$od.goal_month_6",
  //                   goal_month_7: "$$od.goal_month_7",
  //                   goal_month_8: "$$od.goal_month_8",
  //                   goal_month_9: "$$od.goal_month_9",
  //                   goal_month_10: "$$od.goal_month_10",
  //                   goal_month_11: "$$od.goal_month_11",
  //                   quarter_1: "$$od.quarter_1",
  //                   quarter_2: "$$od.quarter_2",
  //                   quarter_3: "$$od.quarter_3",
  //                   quarter_0: "$$od.quarter_0",
  //                   file_quarter_1: "$$od.file_quarter_1",
  //                   file_quarter_2: "$$od.file_quarter_2",
  //                   file_quarter_3: "$$od.file_quarter_3",
  //                   file_quarter_0: "$$od.file_quarter_0",
  //                   goal_quarter_1: "$$od.goal_quarter_1",
  //                   goal_quarter_2: "$$od.goal_quarter_2",
  //                   goal_quarter_3: "$$od.goal_quarter_3",
  //                   goal_quarter_0: "$$od.goal_quarter_0",
  //                   semi_annual_0: "$$od.semi_annual_0",
  //                   semi_annual_1: "$$od.semi_annual_1",
  //                   semi_annual_2: "$$od.semi_annual_2",
  //                   file_semi_annual_0: "$$od.file_semi_annual_0",
  //                   file_semi_annual_1: "$$od.file_semi_annual_1",
  //                   file_semi_annual_2: "$$od.file_semi_annual_2",
  //                   goal_semi_annual_0: "$$od.goal_semi_annual_0",
  //                   goal_semi_annual_1: "$$od.goal_semi_annual_1",
  //                   goal_semi_annual_2: "$$od.goal_semi_annual_2",
  //                   frequency_monitoring: "$$od.frequency_monitoring",
  //                   timetable: "$$od.timetable",
  //                   complete: "$$od.complete",
  //                   data_source: "$$od.data_source",
  //                   budget: "$$od.budget",
  //                   date_added: "$$od.date_added",
  //                   createdBy: "$$od.createdBy",
  //                   updateby: "$$od.updateby",
  //                   updateDate: "$$od.updateDate",
  //                   createdAt: "$$od.createdAt",
  //                   deleted: "$$od.deleted",
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       ],
  //       { allowDiskUse: true },
  //       async (err, Goals) => {
  //         // Check if error was found or not
  //         if (err) {
  //           res.json({ success: false, message: err });
  //         } else {
  //           if (!Goals || Goals.length === 0) {
  //             res.json({
  //               success: false,
  //               message: "No Goals found.",
  //               Goals: [],
  //             }); // Return error of no blogs found
  //           } else {
  //             res.json({
  //               success: true,
  //               goals: await CalculateBudgetAndCompletion(Goals),
  //               office_dropdown: await getBarChartsData(Goals),
  //             }); // Return success and blogs array
  //           }
  //         }
  //       }
  //     ).sort({ _id: -1 });
  //   }
  // );

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

  router.post("/addGoals", (req, res) => {
    try {
      let {
        goals,
        budget,
        createdBy,
        campus,
        department,
        goallistsId,
        strategic_id,
        strategic_objective,
      } = req.body;

      if (!goals && budget) {
        return res.json({
          success: false,
          message: "You must provide an Goals and Action Plan Information",
        });
      }

      let goalsDataRequest = {
        id: uuidv4(),
        goals,
        budget,
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
          Notifications.create({
            userId: req.decoded.id,
            message: `New goal added: ${goals}`,
            type: "goal_added",
            createdAt: new Date(),
            metadata : goalsDataRequest
          });

          res.json({
            success: true,
            message: "This Goals and Action Plan Goals is successfully Added",
            data: { goals: data },
          });
        })
        .catch((err) => {
          if (err.code === 11000) {
            res.json({
              success: false,
              message: "Goals and Action Plan Goals Name already exists",
              err: err.message,
            });
          } else if (err.errors) {
            const errors = Object.keys(err.errors);
            res.json({
              success: false,
              message: err.errors[errors[0]].message,
            });
          } else {
            res.json({
              success: false,
              message:
                "Could not add Goals and Action Plan Error: " + err.message,
            });
          }
        });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  });

  router.get(
    "/getAllObjectivesWithObjectivesForCharts/:id",
    async (req, res) => {
      let queryIds = [];
      let matchQuery = {
        deleted: false,
      };

      const VPId = req.params.id;
      const usersUnderThisVicePresident = await Users.find({
        vice_president_id: VPId,
      }).select({ id: true, firstname: true, lastname: true });
      // Extract the array of user ids
      const userIds = usersUnderThisVicePresident.map((user) => user.id);
      //add own id
      queryIds = userIds;
      queryIds.push(VPId);

      matchQuery.createdBy = { $in: queryIds };
      // const officeName = req.params.officeName.toLowerCase();
      // if (officeName && officeName !== "undefined") {
      //   delete matchQuery.createdBy;

      //   // console.log(officeName);
      //   const department = await Users.findOne({
      //     // department: { $regex: officeName, $options: "i" },
      //     department: officeName,
      //   }).select({ id: 1, firstname: 1, lastname: 1, role: 1 });

      //   if (department?.role === "director") {
      //     // add own ids
      //     const results = await Users.find({
      //       director_id: department.id,
      //     }).select({ id: true, firstname: true, lastname: true });
      //     queryIds = results.map((e) => e.id);
      //     queryIds.push(department.id);
      //   } else if (department?.role === "office-head") {
      //     queryIds = [];
      //     delete matchQuery.createdBy;
      //     queryIds.push(department.id);
      //   }
      //   matchQuery.createdBy = { $in: queryIds };
      // }

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
    }
  );

  //needed
  return router;
};
