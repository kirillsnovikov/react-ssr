export default {
  development: {
    username: 'root',
    password: 'dU+P0sst/',
    database: 'app_db',
    host: '127.0.0.1',
    port: '3307',
    dialect: 'mysql',
    operatorsAliases: 0,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
};