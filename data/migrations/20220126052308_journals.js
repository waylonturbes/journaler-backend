exports.up = async function (knex) {
  return await knex.schema.createTable("journals", (users) => {
    users.bigIncrements("journal_id").primary();
    users
      .bigInteger("user_id")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    users.string("title").notNullable().unique();
    users.string("journal_entry", 2500).notNullable().unique();
    users.timestamps(false, true);
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("journals");
};
