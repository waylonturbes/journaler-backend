const { registerSchema, loginSchema } = require("../schemas/authSchema");
const Users = require("../models/usersmodel");

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

async function usernameAndEmailAvailability(req, res, next) {
  const { username, email } = req.body;
  const [existingUsername] = await Users.getBy({ username });
  const [existingEmail] = await Users.getBy({ email });
  if (existingUsername && existingEmail) {
    return next({
      status: 409,
      message: {
        username: `${username} is taken`,
        email: `${email} is taken`,
      },
    });
  }
  if (existingUsername) {
    return next({
      status: 409,
      message: `${username} is taken`,
    });
  }
  if (existingEmail) {
    return next({
      status: 409,
      message: `${email} is taken`,
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
  next();
}

module.exports = {
  validateRegistration,
  usernameAndEmailAvailability,
  validateLoginInput,
  checkUserExists,
};
