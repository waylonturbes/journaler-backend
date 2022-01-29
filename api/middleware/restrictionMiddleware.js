const { decodeToken } = require("../utils/tokenUtils");

function checkAndDecodeToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return next({
      status: 401,
      message: "Token is required",
    });
  } else {
    const validToken = decodeToken(token);
    if (!validToken.user_id || !validToken.username) {
      return next({
        status: 401,
        message: "Provided token is invalid",
      });
    }
    req.decodedToken = validToken;
    return next();
  }
}

module.exports = {
  checkAndDecodeToken,
};
