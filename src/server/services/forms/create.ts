import { Request, Response } from 'express';
import httpStatusCodes from 'http-status-codes';
import { formRepository } from './index';
import apiResponse from '../../utilites/apiResponse';

export default async (req: Request, res: Response) => {
  const repository = await formRepository();
  try {
    const newForm = repository.create(req.body);
    const result = await repository.save(newForm);
    apiResponse.result(res, result, httpStatusCodes.CREATED);
  } catch (e) {
    apiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message);
  }
};
