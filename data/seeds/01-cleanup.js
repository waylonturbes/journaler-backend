const { clean } = require("knex-cleaner")

exports.seed = function (knex) {
  return clean(knex, {
    node: "truncate",
    ignoreTables: ["knex_migrations", "knex_migrations_lock"]
  })
}
