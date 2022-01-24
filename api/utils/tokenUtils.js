const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function buildToken(user) {
  const payload = {
    subject: user.id,
    user_id: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "1d",
  };
  const signedToken = jwt.sign(payload, JWT_SECRET, options);
  return signedToken;
}

function decodeToken(token, secret) {
  return jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return err;
    }
    return decoded;
  });
}

module.exports = {
  buildToken,
  decodeToken,
};
