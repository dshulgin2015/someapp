// Update with your config settings.
require('dotenv').config({path: '.env'});


module.exports = {

  development: {
		client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },

      ssl: true
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'appdb',
  //     user:     'dshulgin2',
  //     password: 'Uh!_!67912311'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'appdb',
  //     user:     'dshulgin2',
  //     password: 'Uh!_!67912311'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
