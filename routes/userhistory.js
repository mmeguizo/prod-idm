const userHistory = require("../models/userhistories");

module.exports = (router) => {
  router.get("/getAllHistory", async (req, res) => {
    let data = [];
    try {
      let userHistory = await Logs.find().sort({ _id: -1 }).limit(1000);
      data.push(userHistory);
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
