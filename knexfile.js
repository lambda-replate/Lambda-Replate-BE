const dbConnnection = process.env.DATABASE_URL;


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/development.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testing.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  production: {
    client: 'pg',
    connection: dbConnnection,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

};
