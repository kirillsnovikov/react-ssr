import { ConnectionOptions } from 'typeorm';
import { paths } from '../../build/paths';
import { config } from './config';

const { migrations } = paths;

const cliConfig: ConnectionOptions = {
  ...config.db,

  // We are using migrations, synchronize should be set to false.
  synchronize: false,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: true,
  logger: 'file',

  // allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: [`${migrations}/**/*{.ts,.js}`],
  cli: {
    migrationsDir: 'src/server/db/migrations',
  },
};

export = cliConfig;
