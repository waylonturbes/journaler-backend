const { BCRYPT_ROUNDS } = require("../../api/config");
const bcrypt = require("bcryptjs");

const password = bcrypt.hashSync("1234", BCRYPT_ROUNDS);

const users = [
  {
    username: "joe_smith",
    password: password,
  },
  {
    username: "AleskiPetrov",
    password: password,
  },
  {
    username: "barney11",
    password: password,
  },
  {
    username: "amanda99",
    password: password,
  },
];

exports.seed = function (knex) {
  return knex("users").insert(users);
};
