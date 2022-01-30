const router = require("express").Router();
const Users = require("../models/usersModel");
const Journals = require("../models/journalsModel");
const {
  validateJournal,
  titleAndJournalUniqueness,
} = require("../middleware/journalsMiddleware");

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.getAll();
    return res.status(200).json(users);
  } catch (err) {
    return next(err);
  }
});

router.post(
  "/:user_id/journal",
  validateJournal,
  titleAndJournalUniqueness,
  async (req, res, next) => {
    try {
      const newJournal = await Journals.add(req._newJournal);
      return res.status(200).json(newJournal);
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
