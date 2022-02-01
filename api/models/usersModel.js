const db = require("../../data/dbconfig");

async function getAll() {
  const users = await db("users")
    .select("user_id", "username")
    .orderBy("user_id");
  return users;
}

async function getBy(filter) {
  const users = await db("users")
    .select("user_id", "username", "password")
    .where(filter)
    .orderBy("user_id");
  return users;
}

async function add(userInfo) {
  const [newUser] = await db("users")
    .insert(userInfo)
    .returning(["user_id", "username", "created_at", "updated_at"]);
  return newUser;
}

async function update(userInfo) {
  const [updatedUser] = await db("users")
    .where("user_id", "=", userInfo.user_id)
    .update(userInfo)
    .returning(["user_id", "username", "created_at", "updated_at"]);
  return updatedUser;
}

module.exports = {
  getAll,
  getBy,
  add,
  update,
};
