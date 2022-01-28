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

module.exports = {
  getAll,
};
