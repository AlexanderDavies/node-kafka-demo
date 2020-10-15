import { Request } from 'express';
import expressValidator from 'express-validator';
import { ApiError } from '../models/errors';

/**
 * Utility function to validate express middleware headers
 * @function
 * @param {Object} req - the express request object
 */

const validate = (req: Request) => {
  const errors = expressValidator.validationResult(req);

  if (!errors.isEmpty()) {
    const message = errors.array()[0].msg;
    const error = new ApiError({ message, status: 400, errors: errors.array() });
    throw error;
  }

  return true;
};

export default {
  validate
};
