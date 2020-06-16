import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import httpStatusCodes from 'http-status-codes';
import apiResponse from '../utilites/apiResponse';

function validationMiddleware(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    apiResponse.bodyErrors(
      res,
      httpStatusCodes.UNPROCESSABLE_ENTITY,
      errors.array(),
    );
  } else {
    next();
  }
}

export function validator(middlewareValidationRules) {
  middlewareValidationRules.push(validationMiddleware);
  return middlewareValidationRules;
}
