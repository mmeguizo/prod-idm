const Campus = require("../models/campus");

module.exports = (router) => {
  router.get("/getAllCampus", async (req, res) => {
    let data = [];
    try {
      let campus = await Campus.find();
      data.push(
        campus.map((e) => {
          return { name: e.campusName, code: e.campusName };
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

  return router;
};
