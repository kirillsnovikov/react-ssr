import { Request, Response } from 'express';
import httpStatusCodes from 'http-status-codes';
import { postRepository } from './index';
import apiResponse from '../../utilites/apiResponse';
import findById from './findById';

export default async (req: Request, res: Response) => {
  const { params } = req;
  const repository = await postRepository();
  try {
    const post = await findById(req, res);
    await repository.remove(post);
    apiResponse.result(res, {}, httpStatusCodes.NO_CONTENT);
  } catch (e) {
    apiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message);
  }
};
