module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      database: 'csc648team06s19db',
      host: 'gatorstate.tk',
      password: 'T3am06S19p0st!'
    },
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/production'
    }
  }
};
