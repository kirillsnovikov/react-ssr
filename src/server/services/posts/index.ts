import { Post } from '../../models';
import { connection } from '../../db';

export const postRepository = async () => {
  const conn = await connection;
  return conn.getRepository(Post);
};
