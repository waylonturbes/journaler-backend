const router = require("express").Router();
const Journals = require("../models/journalsModel");

router.get("/", async (req, res, next) => {
  try {
    const journals = await Journals.getAll();
    return res.status(200).json(journals);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
