exports.up = async function (knex) {
  return await knex.schema.createTable("users", (users) => {
    users.bigIncrements("user_id").primary();
    users.string("username").notNullable().unique();
    users.string("password").notNullable();
    users.timestamps(false, true);
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("users");
};
