const router = require("express").Router();
const Users = require("../models/usersModel");

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.getAll();
    return res.status(200).json(users);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
