import { Request, Response } from 'express';
import { formRepository } from './index';
import httpStatusCodes from 'http-status-codes';
import apiResponse from '../../utilites/apiResponse';

export default async (req: Request, res: Response) => {
  const repository = await formRepository();
  const { query } = req;
  try {
    const data = await repository.find(query);
    apiResponse.result(res, data, httpStatusCodes.OK);
  } catch (e) {
    apiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message);
  }
};
