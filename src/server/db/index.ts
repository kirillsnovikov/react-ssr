// import { Sequelize, Options, Dialect } from 'sequelize';
import {
  createConnection,
  Connection,
  ConnectionOptions,
  // EntitySchema,
} from 'typeorm';
import { config } from '../../config/config';

export type Dialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';

export interface Configuration {
  type: Dialect;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: Entities;
}

export interface IDatabase {
  configuration: ConnectionOptions;
  connection: () => Promise<Connection>;
}

export type Entities = [Function];

const configuration = <ConnectionOptions>{
  ...config.db,
};

console.log(configuration);
// <ConnectionOptions>config.db;
// configuration.;

export class Database implements IDatabase {
  configuration: ConnectionOptions;
  // connection: () => Promise<Connection>;

  // static configuration: string;
  constructor(configuration: ConnectionOptions) {
    this.configuration = configuration;
    // this.configuration.entities = entities;
  }

  public async connection(): Promise<Connection> {
    return await createConnection(this.configuration);
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
      default:
        return 'mysql';
    }
  }
}

export const connection = new Database(configuration).connection();
// export const connection = async () => {
// const database = new Database(configuration);
// return await database.connection();
// };
