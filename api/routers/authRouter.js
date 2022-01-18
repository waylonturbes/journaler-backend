const router = require("express").Router()

router.all("/*", async (req, res, next) => {
  try {
    res.status(200).json({
      message: "Please [POST] to either /api/auth/login or /api/auth/register"
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
