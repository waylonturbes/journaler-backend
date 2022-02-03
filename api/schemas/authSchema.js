const yup = require("yup");

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("A username is required")
    .min(3, "Username must contain at least 3 characters"),
  password: yup
    .string()
    .trim()
    .required("A password is required")
    .min(4, "Password must contain at least 4 characters"),
});

const loginSchema = yup.object().shape({
  username: yup.string().trim().required("Username is required"),
  password: yup.string().trim().required("Password is required"),
});

module.exports = {
  registerSchema,
  loginSchema,
};
