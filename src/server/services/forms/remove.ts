import { Request, Response } from 'express';
import { formRepository } from './index';
import httpStatusCodes from 'http-status-codes';
import apiResponse from '../../utilites/apiResponse';
import findById from './findById';

export default async (req: Request, res: Response) => {
  const { params } = req;
  const repository = await formRepository();
  try {
    const form = await findById(req, res);
    await repository.remove(form);
    apiResponse.result(res, {}, httpStatusCodes.NO_CONTENT);
  } catch (e) {
    apiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message);
  }
};
