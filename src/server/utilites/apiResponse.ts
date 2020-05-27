import { Response } from 'express';
import httpStatusCodes from 'http-status-codes';
import { ICookie } from '../interfaces/api';

export interface IApiResponse {
  result: () => void;
  error: () => void;
}

export default class apiResponse implements IApiResponse {
  result: () => void;
  error: () => void;
  static result = async (
    res: Response,
    data: object,
    status: number = 200,
    cookie: ICookie = null
  ) => {
    res.status(status);
    if (cookie) {
      res.cookie(cookie.key, cookie.value);
    }
    res.json({ data, success: true });
  };

  static error = async (
    res: Response,
    status: number = 400,
    error: string = httpStatusCodes.getStatusText(status)
  ) => {
    res.status(status);
    res.json({
      error: {
        message: error,
      },
      success: false,
    });
  };
}
