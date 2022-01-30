const Journals = require("../models/journalsModel");
const { journalSchema } = require("../schemas/journalSchema");

async function validateJournal(req, res, next) {
  try {
    await journalSchema.validate(req.body);
    return next();
  } catch (err) {
    return next({
      status: 400,
      message: err.errors[0],
    });
  }
}

async function titleAndJournalUniqueness(req, res, next) {
  const { title, journal_entry } = req.body;
  try {
    const [existingJournal] = await Journals.getBy({ title, journal_entry });
    if (existingJournal) {
      return next({
        status: 401,
        message: "Journal title and entry must be unique",
      });
    }
  } catch (err) {
    return next();
  }
}

module.exports = { validateJournal, titleAndJournalUniqueness };
