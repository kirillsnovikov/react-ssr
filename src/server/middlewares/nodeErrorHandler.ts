import { systemErrors as errors } from '../constants/errors';
// import { Logger } from '../utils/logger';

/**
 * Node startup error handler.
 *
 * @param  {NodeJS.ErrnoException} err
 * @returns <void>
 */
export default function nodeErrorHandler(err: NodeJS.ErrnoException): void {
  //   const logger = new Logger(__filename);
  switch (err.code) {
    case 'EACCES':
      //   logger.error(errors.portRequiresPrivilege);
      process.exit(1);

    case 'EADDRINUSE':
      //   logger.error(errors.portInUse);
      process.exit(1);

    default:
      throw err;
  }
}
