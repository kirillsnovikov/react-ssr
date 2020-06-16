import { createConnection, Connection, ConnectionOptions } from 'typeorm';
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

export class Database implements IDatabase {
  configuration: ConnectionOptions;

  constructor(configuration: ConnectionOptions) {
    this.configuration = configuration;
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
