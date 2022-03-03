// eslint-disable-next-line
const handleError = (err, req, res, next) => {
  return res.status(err.status || 500).json({
    message: err.message || "Something went wrong :(",
  });
};

module.exports = handleError;
