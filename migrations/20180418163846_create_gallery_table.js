exports.up = (knex, Promise) => {
  return knex.schema.createTable("gallery", table => {
    table.increments("gallery_id");
    table.string("imgUrl");
    table.string("title");
    table.string("description");
    table
      .integer("user_id")
      .references("user_id")
      .inTable("users")
      .onDelete("cascade");
    table.timestamps(true, true);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("gallery");
};
