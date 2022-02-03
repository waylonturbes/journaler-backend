const { registerSchema, loginSchema } = require("../schemas/authSchema");
const Users = require("../models/usersModel");

async function validateRegistration(req, res, next) {
  try {
    const validatedRegistration = await registerSchema.validate(req.body);
    req._registration = validatedRegistration;
    return next();
  } catch (err) {
    return next({
      status: 400,
      message: err.errors[0],
    });
  }
}

async function usernameAvailability(req, res, next) {
  const { username } = req.body;
  const [existingUsername] = await Users.getBy({ username });
  if (existingUsername) {
    return next({
      status: 409,
      message: `${username} is taken`,
    });
  }
  return next();
}

async function validateLoginInput(req, res, next) {
  try {
    const res = await loginSchema.validate(req.body);
    req._login = res;
    return next();
  } catch (err) {
    return next({
      status: 400,
      message: err.errors[0],
    });
  }
}

async function checkUserExists(req, res, next) {
  try {
    const { username } = req._login;
    const [existingUser] = await Users.getBy({ username });
    req._user = existingUser;
    if (existingUser === undefined) {
      return next({
        status: 404,
        message: "User does not exist",
      });
    } else {
      return next();
    }
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  validateRegistration,
  usernameAvailability,
  validateLoginInput,
  checkUserExists,
};
