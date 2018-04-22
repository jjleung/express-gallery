// Update with your config settings.

module.exports = {
  development: {
    client: "postgres",
    connection: {
      host: "127.0.0.1",
      database: "gal_db",
      user: "gal_user",
      password: "password"
    }
  },
  migrations: {
    directory: __dirname + "/migrations"
  },
  seeds: {
    directory: __dirname + "/seeds"
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
