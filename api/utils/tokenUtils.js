const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function buildToken(user) {
  const payload = {
    subject: user.id,
    user_id: user.user_id,
    username: user.username,
  };
  const options = {
    expiresIn: "2d",
  };
  const signedToken = jwt.sign(payload, JWT_SECRET, options);
  return signedToken;
}

function decodeToken(token) {
  return jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return err;
    }
    return decodedToken;
  });
}

module.exports = {
  buildToken,
  decodeToken,
};
