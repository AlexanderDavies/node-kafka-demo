import { get } from 'lodash';

import { ApiError } from './../models/errors';
import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils';
import Constants from '../models/constants';

/**
 * Error handler middleware
 * @function
 * @param {Object} error - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

export const errorHandler = async (
  error: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //if no error then call next to handle the unknown route
  if (!error) {
    return next();
  }
  //extract message and status and return to client
  const message: string = get(error, 'message') || Constants.defaultErrorConfig.get('MESSAGE');
  const status: number = get(error, 'status') || +Constants.defaultErrorConfig.get('STATUS');
  const errors: Error[] = get(error, 'errors') || null;

  //log the error
  logger.log({
    level: 'error',
    error,
    message
  });

  return res.status(status).json({ message, errors });
};
