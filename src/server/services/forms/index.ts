import { Form } from '../../models';
import { connection } from '../../db';

export const formRepository = async () => {
  const conn = await connection;
  return conn.getRepository(Form);
};
