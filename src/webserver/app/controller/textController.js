const Text = require("../models/models");
const ApiError = require("../error/error");

class TextController {
  async getOne(req, res) {
    const id = req.params.id;
    const text = await Text.findOne({
      where: { id: id },
    });
    return res.json(text);
  }

  async create(req, res, next) {
    try {
      const textField = req.body.value;
      const idField = req.body.id;
      const text = await Text.create({
        id: idField,
        text: textField,
      });
      return res.json(text);
    } catch (e) {
      next(ApiError.internal(e.message));
    }
  }
}

module.exports = new TextController();
