exports.up = async function (knex) {
  return await knex.schema.createTable("users", (users) => {
    users.bigIncrements("user_id").primary();
    users.string("first_name");
    users.string("last_name");
    users.string("email").notNullable().unique();
    users.string("username").notNullable().unique();
    users.string("password").notNullable();
    users.boolean("private").notNullable().defaultTo(true);
    users.timestamps(false, true);
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("users");
};
