const router = require("express").Router();
const Users = require("../models/usersModel");
const Journals = require("../models/journalsModel");
const { validateNewJournal } = require("../middleware/journalsMiddleware");
const {
  compareUserParamsAndTokenID,
} = require("../middleware/restrictionMiddleware");

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
  validateNewJournal,
  compareUserParamsAndTokenID,
  async (req, res, next) => {
    try {
      const newJournal = await Journals.add(req._journalPayload);
      return res.status(200).json({
        message: "Successfully created new journal",
        newJournal: newJournal,
      });
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
