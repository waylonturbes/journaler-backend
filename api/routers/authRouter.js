const router = require("express").Router();
const Users = require("../models/usersmodel");
const bcrypt = require("bcryptjs");
const { buildToken } = require("../utils/tokenUtils");
const { BCRYPT_ROUNDS } = require("../config/index");
const {
  validateRegistration,
  usernameAndEmailAvailability,
  validateLoginInput,
  checkUserExists,
} = require("../middleware/authMiddleware");

router.post(
  "/register",
  validateRegistration,
  usernameAndEmailAvailability,
  async (req, res, next) => {
    try {
      req._registration.password = bcrypt.hashSync(
        req._registration.password,
        BCRYPT_ROUNDS
      );
      const users = await Users.add(req._registration);
      res.status(201).json(users);
    } catch (err) {
      return next(err);
    }
  }
);

router.post(
  "/login",
  validateLoginInput,
  checkUserExists,
  async (req, res, next) => {
    try {
      const { password } = req.body;
      const user = req._user;
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return next({
          status: 401,
          message: "Invalid credentials",
        });
      }
      let welcomeMessage = `Welcome, ${user.username}!`;
      if (user.first_name !== "" && user.last_name !== "") {
        welcomeMessage = `Welcome, ${user.first_name} ${user.last_name}!`;
      }
      res.status(200).json({
        message: welcomeMessage,
        token: buildToken(user),
      });
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
