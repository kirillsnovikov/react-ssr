import { validator } from '../middlewares/apiErrorHandler';
import { checkSchema } from 'express-validator';

export const FormValidator = validator(
  checkSchema({
    title: {
      isLength: {
        options: {
          max: 150,
        },
      },
    },
    description: {
      isLength: {
        errorMessage: 'Description should be at least 5 chars long',
        options: {
          min: 5,
        },
      },
      exists: {
        options: {
          checkNull: true,
        },
      },
    },
  })
);
