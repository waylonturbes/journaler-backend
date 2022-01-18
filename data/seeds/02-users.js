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
  },
  {
    username: "AleskiPetrov",
    password: password,
    email: "aleski.petrov@genericnames.net",
    first_name: "",
    last_name: ""
  },
  {
    username: "barney11",
    password: password,
    email: "barney11@genericnames.net",
    first_name: "Barney",
    last_name: ""
  },
  {
    username: "amanda99",
    password: password,
    email: "amanda99@genericnames.net",
    first_name: "",
    last_name: "Jackson"
  }
]

exports.seed = function (knex) {
  return knex("users").insert(users)
}
