const { journalSchema } = require("../schemas/journalSchema");

async function validateNewJournal(req, res, next) {
  try {
    const { title, journal_entry } = req.body;
    const { user_id } = req.params;
    req._journalPayload = await journalSchema.validate({
      title,
      journal_entry,
      user_id,
    });
    return next();
  } catch (err) {
    return next({
      status: 400,
      message: err.errors[0],
    });
  }
}

module.exports = { validateNewJournal };
