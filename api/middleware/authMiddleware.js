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
    await loginSchema.validate(req.body);
    next();
  } catch (err) {
    return next({
      status: 400,
      message: err.errors[0],
    });
  }
}

async function checkUserExists(req, res, next) {
  const { username } = req.body;
  const [existingUser] = await Users.getBy({ username });
  if (existingUser === undefined) {
    return next({
      status: 404,
      message: "User does not exist",
    });
  }
  req._user = existingUser;
  return next();
}

module.exports = {
  validateRegistration,
  usernameAvailability,
  validateLoginInput,
  checkUserExists,
};
