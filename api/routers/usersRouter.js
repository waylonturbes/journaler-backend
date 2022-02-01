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

router.get(
  "/:user_id/journals",
  compareUserParamsAndTokenID,
  async (req, res, next) => {
    try {
      const { user_id } = req.params;
      const journals = await Journals.getBy({ user_id });
      return res.status(200).json(journals);
    } catch (err) {
      return next(err);
    }
  }
);

router.post(
  "/:user_id/journals",
  compareUserParamsAndTokenID,
  validateNewJournal,
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

router.delete(
  "/:user_id/journals/:journal_id",
  compareUserParamsAndTokenID,
  async (req, res, next) => {
    try {
      const { journal_id } = req.params;
      await Journals.deleteJournal({ journal_id });
      return res.status(200).json({
        message: `Deleted journal ${journal_id}`,
      });
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
