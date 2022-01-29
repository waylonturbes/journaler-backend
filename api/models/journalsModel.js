const db = require("../../data/dbconfig");

async function getAll() {
  const journals = await db("journals")
    .select(
      "journal_id",
      "user_id",
      "title",
      "journal_entry",
      "created_at",
      "updated_at"
    )
    .orderBy("journal_id");
  return journals;
}

async function getBy(filter) {
  const journal = await db("journals")
    .select("journal_id", "title", "journal_entry", "created_at", "updated_at")
    .where(filter)
    .orderBy("journal_id");
  return journal;
}

async function add(journalInfo) {
  const [newJournal] = await db("journals")
    .insert(journalInfo)
    .returning([
      "journal_id",
      "user_id",
      "title",
      "journal_entry",
      "created_at",
      "updated_at",
    ]);
  return newJournal;
}

module.exports = {
  getAll,
  getBy,
  add,
};
