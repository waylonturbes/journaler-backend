const db = require("../../data/dbconfig")

async function getAll() {
  const users = await db("users")
    .select(
      "user_id as id",
      "first_name",
      "last_name",
      "username",
      "email")
    .orderBy("user_id")
  return users
}

async function getBy(filter) {
  const users = await db("users")
    .select(
      "user_id as id",
      "first_name",
      "last_name",
      "username",
      "email",
      "password")
    .where(filter)
    .orderBy("user_id")
  return users
}

async function add(userInfo) {
  const [newUser] = await db("users")
    .insert(userInfo)
    .returning([
      "user_id",
      "first_name",
      "last_name",
      "username",
      "email"
    ])
  return {
    id: newUser.user_id,
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    username: newUser.username,
    email: newUser.email
  }
}

module.exports = {
  getAll,
  getBy,
  add
}
