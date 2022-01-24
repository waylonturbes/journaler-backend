const yup = require("yup");

const registerSchema = yup.object().shape({
  first_name: yup.string().trim().notRequired(),
  last_name: yup.string().trim().notRequired(),
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "Username must contain at least 3 characters"),
  email: yup
    .string()
    .trim()
    .email("Invalid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(4, "Password must contain at least 4 characters"),
});

const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

module.exports = {
  registerSchema,
  loginSchema,
};
