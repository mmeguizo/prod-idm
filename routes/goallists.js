const Goallists = require("../models/goallists");
const { v4: uuidv4 } = require("uuid");
const Goals = require("../models/goals");

module.exports = (router) => {
  router.post("/addGoal", async (req, res) => {
    let { goals, objectives, createdBy } = req.body; // Extract objectives from req.body

    try {
      // Prepare the objectives array for saving
      const preparedObjectives = objectives.map((objectiveData) => ({
        id: uuidv4(), // Generate unique IDs for objectives
        objective: objectiveData.objective, // Assuming your frontend sends 'objective' property
        createdBy: objectiveData.createdBy,
      }));

      let newGoal = new Goallists({
        id: uuidv4(),
        goals,
        objectives: preparedObjectives, // Include the prepared objectives array
        createdBy,
      });

      let newGoals = await newGoal.save();
      res
        .status(200)
        .json({ success: true, message: "Goal Added", data: newGoals });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  router.get("/getAllGoalLists", async (req, res) => {
    let data = [];
    try {
      let goallists = await Goallists.find({ deleted: false }).sort({
        _id: -1,
      });
      data.push(goallists);
      await res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  router.put("/deleteGoalLists", async (req, res) => {
    let { id } = req.body;

    try {
      let deletedGoal = await Goallists.findOneAndUpdate(
        { id },
        { deleted: true },
        { upsert: true, select: "-__v" }
      );

      if (!deletedGoal) {
        return res.status(404).json({
          success: false,
          message: "Goal not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Goal deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  router.put("/updateGoalList", async (req, res) => {
    const { id, goals, objectives } = req.body;

    try {
      // Check if 'id' and 'goals' are provided
      if (!id || !goals) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields: id or goals",
        });
      }

      // Prepare the update object, including objectives if provided
      const updateData = { goals: goals };

      if (objectives && Array.isArray(objectives)) {
        // Ensure each objective has a unique, non-null ID
        const updatedObjectives = objectives.map((objective) => {
          if (!objective.id) {
            // If id is missing or null
            objective.id = uuidv4(); // Generate a new ID
          }
          return objective;
        });

        updateData.objectives = updatedObjectives;
      }

      const updateGoal = await Goallists.findOneAndUpdate(
        { id: id },
        updateData,
        { new: true }
      );

      if (!updateGoal) {
        return res.status(404).json({
          success: false,
          message: "Goal list not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Goal updated successfully",
        data: updateGoal,
      });
    } catch (error) {
      console.error("Error updating goal list:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error Or Token Expired",
      });
    }
  });

  router.get("/getAllGoallistsDropdown", async (req, res) => {
    let data = [];
    try {
      let campus = await Goallists.find({ deleted: false });
      data.push(
        campus.map((e) => {
          return {
            name: e.goals,
            code: e.goals,
            id: e.id,
            _id: e._id,
            objectives: e.objectives.map((obj) => ({
              goal_id: e.id,
              name: obj.objective,
              code: obj.objective,
              id: obj.id,
              _id: obj._id,
            })),
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
  });

  router.get(
    "/getAllAddObjectivesGoallistsDropdown/:id",

    async (req, res) => {
      let data = [];
      try {
        let campus = await Goallists.find({
          id: req.params.id,
          deleted: false,
        });
        data.push(
          campus.flatMap((e) => {
            return e.objectives.map((x) => {
              return {
                name: x.objective,
                code: x.objective,
                GoalId: e.id,
                goal: e.goals,
                objId: x.id,
              };
            });
          })
        );
        await res.json({
          success: true,
          // get the first level array of data
          objectives: data[0],
          // campus,
        });
      } catch (error) {
        res.json({ success: false, message: error });
      }
    }
  );

  router.get(
    "/getAllEditObjectivesGoallistsDropdown/:id",

    async (req, res) => {
      const { id } = req.params;
      let data = [];
      try {
        let goal = await Goals.find({ id: id });
        let campus = await Goallists.find({
          id: goal[0].goallistsId,
          deleted: false,
        });
        data.push(
          campus.flatMap((e) => {
            return e.objectives.map((x) => {
              return {
                name: x.objective,
                code: x.objective,
                GoalId: e.id,
                goal: e.goals,
                objId: x.id,
              };
            });
          })
        );
        await res.json({
          success: true,
          // get the first level array of data
          objectives: data[0],
          // campus,
        });
      } catch (error) {
        res.json({ success: false, message: error });
      }
    }
  );

  return router;
};
