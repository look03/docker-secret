const Router = require("express");
const router = new Router();
const addTextRouter = require("./addTextRouter");
const textRouter = require("./textRouter");

router.use("/text", addTextRouter);
router.use("/", textRouter);

module.exports = router;
