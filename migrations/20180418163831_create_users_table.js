exports.up = (knex, Promise) => {
  return knex.schema.createTable("users", table => {
    table.increments("user_id");
    table.string("email");
    table.string("password");
    table.timestamps(true, true);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("users");
};
