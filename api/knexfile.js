module.exports = {

    client: 'mysql2',
    connection: {
      host:     'dbs',
      user:     'root',
      password: 'root',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
