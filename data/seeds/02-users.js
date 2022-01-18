const { BCRYPT_ROUNDS } = require("../../api/config")
const bcrypt = require("bcryptjs")

const password = bcrypt.hashSync("1234", BCRYPT_ROUNDS)

const users = [
  {
    username: "joe_smith",
    password: password,
    email: "joe.smith@genericnames.net",
    first_name: "Joe",
    last_name: "Smith"
  }
]

exports.seed = function (knex) {
  return knex("users").insert(users)
}
