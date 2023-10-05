const ApiError = require("./error");

module.exports = function (err, req, res) {
  console.log(
    222222,
    '<<<<<<<<<<<<<< 222222',
  );
  if (err instanceof ApiError)
    return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: "Some error!" });
};
