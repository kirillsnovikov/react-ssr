import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import { Form, Post } from '../server/models';
dotenv.config();

const isDevelopment = process.env.NODE_ENV === 'development';
const entities = [Form, Post];

export const config = {
  name: process.env.APP_NAME,
  db: <ConnectionOptions>{
    type: isDevelopment ? process.env.DEV_DB_TYPE : process.env.DB_TYPE,
    host: isDevelopment ? process.env.DEV_DB_HOST : process.env.DB_HOST,
    port: isDevelopment
      ? Number(process.env.DEV_DB_PORT)
      : Number(process.env.DB_PORT),
    username: isDevelopment ? process.env.DEV_DB_USER : process.env.DB_USER,
    password: isDevelopment ? process.env.DEV_DB_PASS : process.env.DB_PASS,
    database: isDevelopment ? process.env.DEV_DB_NAME : process.env.DB_NAME,
    synchronize: isDevelopment,
    entities,
  },
  server: {
    host: isDevelopment ? process.env.DEV_HOST : process.env.HOST,
    port: isDevelopment
      ? Number(process.env.DEV_PORT)
      : Number(process.env.PORT),
  },
};
