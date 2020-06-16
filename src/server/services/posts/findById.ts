import { Request, Response } from 'express';
import { postRepository } from './index';
import httpStatusCodes from 'http-status-codes';
import apiResponse from '../../utilites/apiResponse';

export default async (req: Request, res: Response) => {
  const { params } = req;
  const repository = await postRepository();

  const data = await repository.findOne(params.id);

  if (data) {
    apiResponse.result(res, data, httpStatusCodes.OK);
    return data;
  } else {
    apiResponse.error(res, httpStatusCodes.BAD_REQUEST);
  }
};
