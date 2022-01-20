const db = require("../../data/dbconfig")

async function getAll() {
  const users = await db("users")
    .select("user_id as id",
      "first_name",
      "last_name",
      "username",
      "email")
    .orderBy("user_id")
  return users
}

async function getBy(filter) {
  const users = await db("users")
    .select("user_id as id",
      "first_name",
      "last_name",
      "username",
      "email",
      "password")
    .where(filter)
    .orderBy("user_id")
  return users
}

module.exports = {
  getAll,
  getBy
}
