// Update with your config settings.

module.exports = {

  development: {
		client: 'postgresql',
    connection: {
      database: 'appdb',
      user:     'dshulgin2',
      password: '111111'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


    staging: {
        client: 'pg',
        connection: 'postgres://vqkwwouonqctvi:cee20663aaadc74235b240cdb5f7ad41e4d5b8c7218f71a86337d18b98fb25bb@ec2-54-243-38-139.compute-1.amazonaws.com:5432/d6uj4rs3kf0tg6',
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },

        ssl: true
    },



};
