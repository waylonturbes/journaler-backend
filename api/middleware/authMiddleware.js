const { registerSchema } = require("../schemas/authSchema");
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
        username: `Username ${username} is taken`,
        email: `Email ${email} is taken`,
      },
    });
  }
  if (existingUsername) {
    return next({
      status: 409,
      message: `Username ${username} is taken`,
    });
  }
  if (existingEmail) {
    return next({
      status: 409,
      message: `Email ${email} is taken`,
    });
  }
  return next();
}

module.exports = {
  validateRegistration,
  usernameAndEmailAvailability,
};
