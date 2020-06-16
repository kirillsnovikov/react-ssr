import { Request, Response } from 'express';
import httpStatusCodes from 'http-status-codes';
import { postRepository } from './index';
import apiResponse from '../../utilites/apiResponse';

export default async (req: Request, res: Response) => {
  const { params } = req;
  const repository = await postRepository();
  try {
    const result = await repository.update(params.id, { ...req.body });
    apiResponse.result(res, result, httpStatusCodes.OK);
  } catch (e) {
    apiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message);
  }
};
