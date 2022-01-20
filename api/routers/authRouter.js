const router = require("express").Router()
const Users = require("../models/usersmodel")

router.get("/users", async (req, res, next) => {
  try {
    const users = await Users.getAll()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})

module.exports = router
