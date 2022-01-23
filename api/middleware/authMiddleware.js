const { registerSchema } = require("../schemas/authSchema");

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

module.exports = {
  validateRegistration,
};
