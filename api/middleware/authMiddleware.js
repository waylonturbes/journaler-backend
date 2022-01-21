const { registerSchema } = require("../schemas/authSchema");

async function validateRegisteration(req, res, next) {
  try {
    const { first_name, last_name, username, email, password } = req.body;
    await registerSchema.validate({
      first_name,
      last_name,
      username,
      email,
      password,
    });
  } catch (err) {
    next({
      status: 400,
      message: err.message,
    });
  }
}

module.exports = {
  validateRegisteration,
};
