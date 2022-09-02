var express = require("express");
var router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get Data sucessfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).status.send("Server error");
  }
});

module.exports = router;
