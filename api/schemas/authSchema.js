const yup = require("yup");

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "Username must contain at least 3 characters"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(4, "Password must contain at least 6 characters"),
});

const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

module.exports = {
  registerSchema,
  loginSchema,
};
