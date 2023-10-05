const Router = require("express");
const router = new Router();
const textController = require("../controller/textController");

router.get("/", (req, res) => {
  res.json({ message: "ALL WORKING" });
});
router.get("/:id", textController.getOne);

module.exports = router;
