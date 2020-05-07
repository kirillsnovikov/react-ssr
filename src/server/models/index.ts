import { Sequelize } from 'sequelize';
import { Dialect, Options } from 'sequelize/types';
import * as dotenv from 'dotenv';
dotenv.config();

export interface IDatabase {
  db: string;
  user: string;
  password: string;
  host: string;
  port: number;
  minPool: number;
  maxPool: number;
  configuration: Options;
  readonly connection: Sequelize;
  readonly dialect: Dialect;
}

class Database implements IDatabase {
  db: string;
  user: string;
  password: string;
  host: string;
  port: number;
  minPool: number;
  maxPool: number;
  configuration: Options;

  constructor() {
    this.db = process.env.DB_NAME || 'db_name';
    this.user = process.env.DB_USER || 'db_user';
    this.password = process.env.DB_PASS || 'db_pass';
    this.host = process.env.DB_HOST || '127.0.0.1';
    this.port = Number(process.env.DB_PORT) || 3306;
    this.minPool = Number(process.env.MIN_POOL) || 1;
    this.maxPool = Number(process.env.MAX_POOL) || 100;
    this.configuration = {
      host: this.host,
      port: this.port,
      dialect: this.dialect,
      pool: {
        max: this.maxPool,
        min: this.minPool,
        acquire: 30000,
        idle: 10000,
      },
    };
  }

  get connection(): Sequelize {
    return new Sequelize(this.db, this.user, this.password, this.configuration);
  }

  get dialect(): Dialect {
    switch (process.env.DB_DIALECT) {
      case 'mysql':
        return process.env.DB_DIALECT;
      case 'postgres':
        return process.env.DB_DIALECT;
      case 'sqlite':
        return process.env.DB_DIALECT;
      case 'mariadb':
        return process.env.DB_DIALECT;
      case 'mssql':
        return process.env.DB_DIALECT;
      case 'mariadb':
        return process.env.DB_DIALECT;
      default:
        return 'mysql';
    }
  }
}

export const sequelize = new Database().connection;
// export default sequelize;
