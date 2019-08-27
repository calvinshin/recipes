// const path = require("path");
const router = require("express").Router();
const query = require("./query")

router.get("/", (req, res) => {
  res.send("Connected to 3001!")
})

router.use("/query", query)

router.get("/testroute", (req, res) => {
  res.send(req.query)
})

// router.use((req, res) =>
//   res.send("Hello!")
// );

module.exports = router