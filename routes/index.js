const express = require("express");
const router = express.Router();

router.use("/api", (req, res) => {
  res.status(200).send({
    message: "Connected",
  });
});

module.exports = router;
