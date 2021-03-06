import { Request, Response } from 'express';
import httpStatusCodes from 'http-status-codes';
import { formRepository } from './index';
import apiResponse from '../../utilites/apiResponse';

export default async (req: Request, res: Response) => {
  const { params } = req;
  const repository = await formRepository();

  const data = await repository.findOne(params.id);

  if (data) {
    apiResponse.result(res, data, httpStatusCodes.OK);
    return data;
  }
  apiResponse.error(res, httpStatusCodes.BAD_REQUEST);
};
